# sti-collection

## 使用方式
```
node index.js ${directory}
```

## 输出两个文件

### component.txt
该文件主要统计各个组件使用次数
```
sti-guide:1
sti-guide-step:3
sti-form:97
sti-row:242
sti-col:395
sti-form-item:814
sti-input:451
sti-button:562
sti-dialog:40
sti-searchform:94
sti-permission:46
sti-download:21
sti-table:97
sti-icon:425
sti-radio:60
sti-select:178
sti-tabs:20
sti-tab:63
sti-switch:33
sti-datepicker:35
```

### file.txt
该文件列出了每个组件使用sti-component的情况
```
src/App.vue:sti-guide,sti-guide-step,sti-guide-step,sti-guide-step
src/url.js:
src/index.vue:sti-form,sti-form,sti-row,sti-col,sti-form-item,sti-input,sti-form-item,sti-input,sti-form-item,sti-input,sti-form-item,sti-input,sti-form-item,sti-input,sti-form-item,sti-input,sti-form-item,sti-form-item,sti-input,sti-form-item,sti-input,sti-input,sti-button,sti-dialog,sti-button,sti-button,sti-form-item,sti-button,sti-button
src/index.vue:sti-searchform,sti-permission,sti-button,sti-permission,sti-button,sti-button,sti-download,sti-form-item,sti-input,sti-form-item,sti-input,sti-form-item,sti-input,sti-form-item,sti-input,sti-button,sti-table,sti-download,sti-icon,sti-permission,sti-input,sti-input,sti-permission,sti-button,sti-permission,sti-button
```
