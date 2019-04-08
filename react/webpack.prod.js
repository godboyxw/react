const merge = require('webpack-merge')
const common = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports=merge(common,{
    mode: 'production',
    devServer:{

    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',//css/[name].css
            chunkFilename: "[id].css"
        })
    ],
    performance: {
        hints: false
    },
    module: {
        rules: [
            // {
            //     test: /\.(sa|sc|c)ss$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'postcss-loader',
            //         'sass-loader'
            //     ]
            // },
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
        ]
    }
})
