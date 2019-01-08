const autoprefixer = require('autoprefixer')

const env = process.env.NODE_ENV || 'development'
require('dotenv').config({ path: `./.env.${env}` })

module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
    },
    plugins: [
        `gatsby-plugin-layout`,
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [autoprefixer()],
                precision: 8,
            },
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
