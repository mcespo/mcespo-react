module.exports = {
  siteMetadata: {
    title: 'Marvin Cespedes, Frontend Sweetie-pie',
    description: 'Chicago-based frontend developer and web designer, Marvin Cespedes produces quality work that looks barely passible by industry standards.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ]
}
