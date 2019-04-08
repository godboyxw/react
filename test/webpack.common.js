const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: { //  项目的入口文件，webpack会从入口js文件开始，把所有依赖的js都加载打包
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), //  项目的打包文件路径
        filename: "[name].bundle.js" //  打包后的文件名 []下的name为变量,即是entry里面的app 打包后为app.bundle.js
    },
    plugins: [
        // new CleanWebpackPlugin(['dist'])
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        // new MiniCssExtractPlugin({
        //     filename: 'css/[name].css',
        //     chunkFilename: "[id].css"
        // })
    ],
    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/, //这是配置加载文件的规则 值是正则表达式 这里写的意思是.js .jsx结尾的文件加载loader
            //     use: "babel-loader",
            //     // options: {
            //     //     exclude: /node_module/, //这个目录不需要加载loader
            //     //     query: {
            //     //         //presets:["react","es2015"]        //加载loader的presets
            //     //         // presets: ['@babel/react', '@babel/stage-0']
            //     //     }
            //     // }
            // },
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader','css-loader']
            // },
            {
                test: /\.(jpg|png|gif|svg|jpeg|)$/,
                // use : 'url-loader'  //base64图片打包
                use: 'file-loader' //将图片命名,复制到dist目录下
            },
            {
                test: /\.less$/,
                use: [ //前提需要安装less (前提app.js中用require或者import模块化引入less文件)
                    'style-loader', //把css以style标签形式插入head中
                    'css-loader', //编译less为css
                    'less-loader' //编译less
                ]
            },
            {
                test: /\.html/,
                use: 'html-withimg-loader'
            }
            // {
            //     test :/\.js$/,
            //     use : 'eslint-loader',
            //     exclude: /node_modules/
            // }
        ]
    }
}