const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode,
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/transform-runtime']],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  // plugins: [
  // 	new ImageMinimizerPlugin({
  // 		minimizerOptions: {
  // 			plugins: [
  // 				["mozjpeg", { progressive: true, quality: 70 }],
  // 			],
  // 		}

  // 	})
  // ],

  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
  },
};
