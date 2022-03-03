module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
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
