module.exports = {
  filenameHashing: true,
  publicPath: process.env.BASE_URL,
  configureWebpack: {
    devtool: 'source-map',
    optimization: {
      /**
       * Uncomment this if you want don't want code minified
       * on staging. Good for debugging
       **/
      // minimize: process.env.NODE_ENV !== 'production'
    }
  }
}
