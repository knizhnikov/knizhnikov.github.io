const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { ImageminWebpackPlugin } = require("imagemin-webpack");
// Before importing imagemin plugin make sure you add it in `package.json` (`dependencies`) and install
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const plugins = [imageminJpegtran(),imageminOptipng( { optimizationLevel: 4 } )];

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
          test: /\.scss$/,
          use: [
              "style-loader", 
              "css-loader", 
              "sass-loader" 
          ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.vue$/,
        use: [
            "vue-loader"
        ]
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?name=[name].[ext]&limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=[name].[ext]"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?name=[name].[ext]&limit=10000&mimetype=image/svg+xml"
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
              useRelativePath: true,
              publicPath: url => url
            }
          }
        ]
      }]
  }, 
  plugins: [
    new VueLoaderPlugin(),
    new ImageminWebpackPlugin({
      imageminOptions: {
        plugins
      }
    })
  ]
};