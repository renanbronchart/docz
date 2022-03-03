module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-stylus`,
      options: {
       cssLoaderOptions: {
         esModule: false,
         modules: {
           namedExport: false,
         },
       },
     },
    }
  ],
}
