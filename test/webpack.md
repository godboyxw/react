###自定义配置项目
安装webpack-cli和webpack-dev-server可以在package.json脚本中配置项目启动脚本
以开发模式为例:
```
"scripts" : {
    "start" : "webpack-dev-server --open --progress --watch --config webpack.config.js"
}
npm start即可启动项目
webpack打包，后面可以跟很多参数，如:
--progress: 打包进度  只用于命令行工具(CLI)  将运行进度输出到控制台。
--display-modules: 打包的模块 
--colors: 是否彩色显示 打包提示信息
--display-reasons: 打包原因
--watch: 自动监控文件变化
```
devServer配置下的host和port(mode:development开发模式)启动项目的entry文件(index.html)
包含打包后script引入的js文件(entry),以及loader处理的css,less,图片等文件

###区分开发模式和生产模式
配置webpack.common.js
webpack.dev.js
webpack.prod.js
集合webpack-merge模块