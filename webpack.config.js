const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./client"),
  output: {
      path: path.resolve(__dirname, "./public"),
      filename: "bundle.js"
    },
	module: {
		rules: [{
        test: /\.js[x]?/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true
            }
          }
        ]
      }]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
}