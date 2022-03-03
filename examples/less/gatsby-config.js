module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-less`,
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
