// const md5 = require("nodejs-md5");

// 后续再增加比对的吧
// const getFileMD5 = (path) => {
//     return new Promise((resolve, reject) => {
//         md5.file.quiet(path, function(err, md5Value) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(md5Value)
//             }
//         });
//     })
// }

window.exports = {
    "change": {
        mode: "none",
        args: {
            enter: async(action) => {
                // let initial_MD5 = await getFileMD5(action.payload[0].path)
                let cmd = `echo 'Oct1a_'+${new Date().getTime()} >> ${action.payload[0].path}`
                var exec = require('child_process').exec;
                exec(cmd, function(err, stdout, stderr) {
                    if (err) {
                        utools.showNotification(`MD5修改失败，请在插件评论区与开发者联系。`)
                    } else {
                        // let after_md5 = await getFileMD5(action.payload[0].path);
                        // utools.showNotification(`MD5更改成功.,原:${initial_MD5},改后:${after_md5}`)
                        utools.showNotification(`MD5更改成功!`)
                    }
                    utools.hideMainWindow()
                    utools.outPlugin()
                });
            }
        }
    }
}