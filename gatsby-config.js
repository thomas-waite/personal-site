/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Tom Waite`,
    author: `Tom Waite`,
    firstName: `Tom`,
    lastName: `Waite`,
    description: `Tom Waite's personal site`,
    occupation: `Software Engineer`,
    keywords: [`Tom`, `Waite`, `Personal`, `Blog`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: false,
    designations: [`Software engineer`],
    readingList: [
      {
        title: `Sapiens: A Brief History of Humankind`,
        author: `Yuval Noah Harari`,
        link: `https://www.goodreads.com/book/show/23692271-sapiens`,
      },
    ],
    showsList: [
      {
        title: `Avatar: The Last Airbender`,
        author: `Micheal DiMartino, Bryan Konietzko`,
        link: `https://www.imdb.com/title/tt0417299/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Doe's Personal Site`,
        short_name: `J.Doe`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
