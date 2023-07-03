module.exports = {
    //关闭语法检查
    lintOnSave: false,
    //开启代理服务器 (方式一)
    /*devServer: {
        proxy: 'http://localhost:5000'
    }*/
    devServer: {
        proxy: {
            '/api': {
                target: '<url>',
                //将/api 换成 /
                pathRewrite: {'^/api':''},
                //支持websocket
                ws: true,
                //默认为true 用于控制请求头中的host值
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}