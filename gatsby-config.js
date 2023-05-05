/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: 'products-form',
      // queryParams: {
      //   populate: {
      //     cover: '*',
      //     blocks: {
      //       populate: '*',
      //     },
      //   },
      // },
    },
  ],
  singleTypes: [],
  remoteFileHeaders: {
    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  },
};

const gatsbyManifest = {
  name: `CCLARITO`,
  short_name: `CCLARITO`,
  start_url: `/`,
  background_color: `#fff`,
  theme_color: `#fff`,
  display: `minimal-ui`,
  icon: `./src/assets/images/logo.png`,
};
const sourceFilesystem = [
  {
    name: 'images',
    path: './src/assets/images/',
  },
];

module.exports = {
  siteMetadata: {
    title: 'cclarito',
    siteUrl: `https://www.cclarito.com`,
    description:
      'Z doświadczenia wiemy, że najlepsze strony internetowe to strony przejrzyste, konkretne i łatwe w obsłudze ... i w ten sposób je tworzymy!',
    author: '@CCLARITO',
    keywords: ['strony', 'www'],
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-layout`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: sourceFilesystem[0],
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: gatsbyManifest,
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
  trailingSlash: 'never',
};
