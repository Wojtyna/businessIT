/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: 'legiblify',
    siteUrl: `https://www.legiblify.com`,
    description:
      'Z doświadczenia wiemy, że najlepsze strony internetowe to strony przejrzyste, konkretne i łatwe w obsłudze ... i w ten sposób je tworzymy!',
    author: '@LEGIBLIFY',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-layout`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LEGIBLIFY`,
        short_name: `LEGIBLIFY`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `./src/assets/images/logo.png`,
      },
    },
  ],
  trailingSlash: 'never',
};
