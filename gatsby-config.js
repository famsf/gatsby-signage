module.exports = {
  siteMetadata: {
    title: `de Young Museum Digital Signage`,
    description: `Front-end site powering the de Young's digital signage.`,
    author: `Andrew Fox`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://dev-gatsby-signage-cms.pantheonsite.io/`,
        apiBase: 'jsonapi',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      // This is causing a FOUC; we need to load this synchronously... Applied an OK workaround.
      options: {
        typekit: {
          id: 'tpb7nan',
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://famsf-signage.netlify.com',
        policy: [{ userAgent: '*', disallow: "/"}]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
