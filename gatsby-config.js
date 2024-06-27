const siteConfig = require('./config/site-config');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: { 
    ...siteConfig,
  },


  
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_CMS_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-XEH4N2ZB1B", // Google Analytics / GA
     ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {

          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
  
        },
      },
    },

    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.labelfolie.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/protection-des-donnees', '/mentions-legales','/credits','/protection-des-donnees/', '/mentions-legales/','/credits/' ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve: 'gatsby-plugin-styled-components',
    },
   
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/containers/Layout.js'),
      },
    },
     
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Label Folie`,
        short_name: `Label Folie`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/logo-labelfolie-manifest-square.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
   //  `gatsby-plugin-offline`,
  ],
}
