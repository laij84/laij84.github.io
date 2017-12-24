var autoprefixer = require('autoprefixer');

let env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`});

module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-postcss-sass`,
            options: {
            postCssPlugins: [
              autoprefixer()
            ],
            precision: 8
            }
        },
        {
          resolve: `gatsby-source-contentful`,
          options: {
            spaceId: `${process.env.CONTENTFUL_ID}`,
            accessToken: `${process.env.CONTENTFUL_TOKEN}`,
            },
        },
    ],
}