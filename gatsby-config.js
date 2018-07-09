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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-24868829-1',
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 750,
            showCaptions: true,
            linkImagesToOriginal: false,
            backgroundColor: 'transparent',
            wrapperStyle: `
              margin-bottom: 0.5rem;
              box-shadow: 0 0 14px 0 #d2d2d2;
            `
          }
        }]
      }
    },
    'gatsby-transformer-sharp'
  ]
}
