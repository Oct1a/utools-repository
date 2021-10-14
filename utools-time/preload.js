window.exports = {
  "time": {
    mode: "none",
    args: {
      enter: (action, callbackSetList) => {
        // 判断用户有没设置过默认时钟
        let history = utools.dbStorage.getItem("time")
        utools.createBrowserWindow(`Stock/${history || 'time-Flop'}.html`, {
          kiosk: true
        });
        // utools.dbStorage.setItem('time', 3.1415926)
      }
    }
  },
  "time-choose": {
    mode: "list",
    args: {
      enter: (action, callbackSetList) => {
        callbackSetList([{
          title: "☸ 罗盘时钟",
          description: "抖音流量",
        }, {
          title: "♦ 翻牌时钟",
          description: "抖音流量",
        }])
      },
      search: (action, searchWord, callbackSetList) => {

      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {
        // Stock/time-Pyxis.html
        utools.createBrowserWindow('Stock/time-Flop.html', {
          kiosk: true
        })
      },
      placeholder: "点击进入预览，下次使用将使用上次设置"
    }
  }
}

// flop: https://github.com/gtdalp/CSS3-CLOCK

// https: //fakeupdate.net/

// https: //github.com/kakkk/FxxkBlueScreen

// 在此特别鸣谢两位作者，如有侵权请联系本人删除。