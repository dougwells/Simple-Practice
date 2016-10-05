module.exports = {
  entry: {
    app: "./app/assets/scripts/app.js",
    vendor: "./app/assets/scripts/vendor.js"
  },
  output: {
    path: "./app/temp/scripts",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        /* this means that we are telling webpack that we only want this babel loader or plugin to be applied to JS and nothing else. The fewer files webpack has to apply the babel loader to, the faster the conversion process will go. */
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
