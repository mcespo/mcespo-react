import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from "styled-components";

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      meta={[
        { name: 'keywords', content: 'Web Design, Frontend Developer, Chicago, Marvin Cespedes' },
        { name: 'msapplication-TileColor', content: '#FFFFFF' },
        { name: 'msapplication-TileColor', content: '/mstile-144x144.png' },
        { name: 'msapplication-TileColor', content: '/mstile-70x70.png' },
        { name: 'msapplication-TileColor', content: '/mstile-150x150.png' },
        { name: 'msapplication-TileColor', content: '/mstile-310x150.png' },
        { name: 'msapplication-TileColor', content: '/mstile-310x310.png' }
      ]}
      link={[
        { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/images/favicons/apple-touch-icon-152x152.png' },
        { rel: 'icon', sizes: '196x196', href: '/favicon-196x196.png' },
        { rel: 'icon', sizes: '128x128', href: '/favicon-128x128.png' },
        { rel: 'icon', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', sizes: '64x64', href: '/favicon.ico' }
      ]}
    />
    <Header />
    <WelcomeSection>
      {children()}
    </WelcomeSection>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
const WelcomeSection = styled.section`
  display: block;
  margin: 0 auto;
  width: 80vw;
  @media screen and (min-width: 64rem) {
    width: 75ch;
  }
`