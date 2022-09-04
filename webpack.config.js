const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: "production",
  module: {
    rules: [
        {
            test: /\.ts$/,
            use: [
             // 配置babel,babel-loader 用对象形式可以添加多个配置项
                {
                    loader: "babel-loader",
                    options: {
                      // 设置预定义的环境
                        presets: [
                            [
                             // 指定环境的插件
                                "@babel/preset-env",
                                 // 配置信息
                                {
                                // 要兼容的目标浏览器（不一定会兼容）
                                    "targets": {
                                        "rhino": "1.7.14"
                                    },
                                    // 指定corejs的版本
                                    "corejs":"3",
                                     // 使用corejs的方式 "usage" 表示按需加载
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                {
                    loader: "ts-loader",
                }
            ],
            exclude: /node_modules/
        }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            global_defs: {
              "@console.log": "print"
            },
            // 这里设置为false, 否则访问不到暴露的两个生命周期函数
            unused: false
          },
          // 保留函数名称，否则访问不到暴露的两个生命周期函数
          keep_fnames: true,
          sourceMap: {
            url: "bundle.js.map"
          }
        }
      })
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};