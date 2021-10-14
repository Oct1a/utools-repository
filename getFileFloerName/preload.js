const { clipboard } = require('electron')

// 快速复制，隐藏
const handResult = (data, type, mode) => {
  window.utools.hideMainWindow()
  clipboard.writeText(data, 'selection');
  let tips = `${type == 'file' ? '文件名称' : '路径'}已${mode ? '批量' : ''}`
  window.utools.showNotification(`${tips}复制成功(¬‿¬)`)
  window.utools.outPlugin()
}

// 复制路径，弃用，官方已有提供
// {
//   "type": "files",
//   "label": "获取文件夹路径",
//   "fileType": "directory",
//   "minLength": 1
// }, {
//   "type": "files",
//   "label": "获取文件路径",
//   "fileType": "file",
//   "minLength": 1
// },

window.exports = {
  // 获取名称
  "getFileName": {
    mode: "none",
    args: {
      enter: action => {
        if (action.type == 'files') {
          let list = []
          for (const item of action.payload) {
            list.push(item.name)
          }
          handResult(list.join('\r\n'), 'file', list.length > 1)
        } else if (action.type == 'window') {
          handResult(action.payload.title || action.payload.app, 'path')
        }
      }
    }
  },
  // 文件路径
  "copyPathAndFile": {
    mode: "none",
    args: {
      enter: action => {
        if (action.type == 'files') { //文件调出超级面板
          let list = []
          for (const item of action.payload) {
            list.push(item.path.slice(0, item.path.lastIndexOf('\\'))) //只截取前一部分路径
          }
          handResult(list.join(',\r\n'), 'path', list.length > 1)
        } else if (action.type == 'window') { //窗口调出超级面板
          handResult(action.payload.appPath, 'path')
        }
      }
    }
  }
}