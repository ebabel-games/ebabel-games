module.exports = {
  siteMetadata: {
    title: `Thomas Amar`,
    description: `React.js and Node.js Freelancer in Amsterdam - Contact Thomas Amar on +31 (0)6 21 80 98 99`,
    author: `@ebabel`,
    siteUrl: `https://ebabel.eu`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eBabel`,
        short_name: `ebabel`,
        start_url: `/`,
        background_color: `#4a47ff`,
        theme_color: `#ffd147`,
        display: `standalone`,
        icon: `src/images/html5-icon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
