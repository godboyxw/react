const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common,{
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost', //默认是 localhost。如果你希望服务器外部可访问，指定如下：'0.0.0.0'
        port: 8088, //监听请求的端口号 数字类型
        contentBase: path.join(__dirname, '/'), //告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要,注意，推荐使用绝对路径。也可以以数组形式从多个目录提供内容：
        compress: true, //一切服务都启用gzip 压缩
        hot: true, //启用 webpack 的模块热替换特性
        open: true, //自动打开浏览器,等同webpack-dev-server --open
        //lazy: true, // dev-server 只有在请求时才编译包(bundle)。这意味着 webpack 不会监视任何文件改动。我们称之为“惰性模式”。watchOptions 在使用惰性模式时无效。
        // proxy : { // 如果你有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用
        //     "/api" : { // 如果你不想始终传递 /api ，则需要重写路径
        //         target : "http://localhost:3000",
        //         pathRewrite : {"^/api" : ""}
        //     } //客户端的请求路由自动代理到http://localhost:3000下
        // },
        //publicPath: "/assets/" //修改 publicPath，将 bundle.js 放在一个目录：你的包现在可以通过 http://localhost:8080/assets/bundle.js 访问。
        //将用于确定应该从哪里提供 bundle，并且此选项优先于contentBase
    },
    plugins :[
        new MiniCssExtractPlugin({
            filename: '[name].css'  //[]下的name为变量,即是entry里面的app 打包后为css/app.css
        })
    ],
    module :{
        rules :[
            {
                test : /\.css$/,
                //use : ['style-loader','css-loader']
                // 经测试,style-loader是将样式以style标签的形式插入head中,不会单独打包css文件(前提app.js中用require或者import模块化引入css文件)
                use : [
                    MiniCssExtractPlugin.loader,
                    //会将css按照插件中的filename进行打包,以link的形式插入head中(前提app.js中用require或者import模块化引入css文件)
                    'css-loader'
                ]
            },

            // {
            //     test: /\.(sa|sc|c)ss$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'postcss-loader',
            //         'sass-loader'
            //     ]
            // }
        ]
    }
})
