/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// npm i @contentful/rich-text-react-renderer
//gatsby build --prefix-paths
//DEAL WITH CONTACT FORM!!!!!!!!!!!!!!!!!!!!!!!!
//google HTML file!!!!!!!!!!!!!!!
//both go in root "src" and must be moved manually to root.
module.exports = {
  /* Your site config here */
  // pathPrefix: "brp/", // uncomment for build!!!!!!!!!!!!!!!!!!!!!!!!
  siteMetadata: {
    title: "Blue Ridge Propane NC",
    author: "Jereme Daniels",
    siteUrl: "https://www.blueridgepropanenc.net/",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        // spaceId: process.env.CONTENTFUL_SPACE_ID,
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        spaceId: "kl4449kc17a7",
        accessToken: "dd5Vgaw8ZtE4RYhTL-QyBcVYdd_JDs6ZkuzJsSzqz5Y",
      },
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Muli`,
          },
          {
            family: `Jaldi`,
          },
          {
            family: "Molengo",
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `graphics`,
        // path: `${__dirname}/src/pages/`,
        path: `${__dirname}/src/graphics/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
