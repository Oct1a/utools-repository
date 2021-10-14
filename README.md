下载地址：[Release plugins · Oct1a/utools-repository (github.com)](https://github.com/Oct1a/utools-repository/releases/tag/publish)



## 1️⃣ 修改文件MD5

因无法上架，只能自己下载插件使用了

![](http://img.oct1a.cn/202110141031893.png)



### 开发技术

主要是使用node的`child_process`库调用命令进行更改，主要代码：

```javascript
     let cmd = `echo 'Oct1a_'+${new Date().getTime()} >> ${action.payload[0].path}`
     var exec = require('child_process').exec;
     exec(cmd, function(err, stdout, stderr) {
         if (err) {
           utools.showNotification(`MD5修改失败，请在插件评论区与开发者联系。`)
         } else {
           getFileMD5(action.payload[0].path);
           utools.showNotification(`MD5更改成功!`)
         }
           utools.hideMainWindow()
           utools.outPlugin()
       });
```



### 使用方式

1. 下载打包的插件并拖入安装
2. 选择文件调出超级面板
3. 选择更改文件md5即可

![](http://img.oct1a.cn/202110141031847.jpg)



## 2️⃣ 快速获取文件名称/文件夹名称

因新版utools官方已自带该功能，没啥作用了其实

### 功能：

- 获取当前程序所在路径
- 获取当前窗口名称
- 获取文件夹路径
- 获取文件名称



### 技术

主要是调用官方内置回调方法进行获取



### 使用方式

1. 下载打包的插件并拖入安装
2. 选择文件调出超级面板/在当前窗口或者程序调出面板使用

![](http://img.oct1a.cn/202110141037421.jpg)
![](http://img.oct1a.cn/202110141037422.jpg)
