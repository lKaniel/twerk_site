/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
        title: "JuliaTwerk",
        description: "Сайт для заннять з тверку"
    },
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-plugin-react-redux`,
            options: {
                // [required] - path to your createStore module
                pathToCreateStoreModule: './src/store/createStore',
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: "Didact Gothic",
                            variants: ["300", "400", "500", "600", "700"],
                            subsets: ["latin", "cyrillic"]
                        },
                        {
                            family: "Comfortaa",
                            variants: ["400", "700"],
                            subsets: ["latin", "cyrillic"]
                        },
                    ],
                },
            },
        },
    ],
}
