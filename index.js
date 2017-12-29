const fs = require('fs')

const arguments = process.argv.splice(2)
const filePath = []
const fileResult = {}
const componentsResult = {}
const root = arguments[0]

iteratorFiles(root)

filePath.forEach((path) => {
    readFile(path)
})

writeFile()

// 遍历目录
function iteratorFiles(path) {
    const files = fs.readdirSync(path)
    
    files.forEach((file) => {
        let pathname = `${path}/${file}`, 
            stat = fs.lstatSync(pathname)

        if (!stat.isDirectory()) {
            filePath.push(pathname)
        } else {
            iteratorFiles(pathname)
        }
    })
}

//读取文件内容
function readFile(path) {
    const content = fs.readFileSync(path, 'utf-8')
    parse(path, content)
}

// 解析文件的内容，存到对应的object和array中
function parse(path, str) {
    fileResult[path] = []

    const re = new RegExp(/<sti-.*>/, 'g')
    const res = re[Symbol.match](str)

    if (!res) return
    res.forEach((val) => {
        let comp = val.split(' ')[0].split('>')[0]
        comp = comp[0] == '<' ? comp.slice(1): comp
        
        fileResult[path].push(comp)
        if (!componentsResult[comp]) {
            componentsResult[comp] = 1
        } else {
            componentsResult[comp] += 1
        }
    })
}

// 写txt
function writeFile() {
    let fileStr = componentStr = ''

    for(let i in fileResult) {
        fileStr = fileStr + i + ':' + fileResult[i].join() + '\n'
    }

    for(let i in componentsResult) {
        componentStr = componentStr + i + ':' + componentsResult[i] + '\n'
    }
    fs.writeFileSync('file.txt', fileStr, 'utf-8')
    fs.writeFileSync('component.txt', componentStr, 'utf-8')
}