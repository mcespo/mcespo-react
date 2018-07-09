import React, { Component } from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import LogoIcon from "../../images/marvin-cespedes_logo-icon.svg";

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Link to="/"><FooterIconLogo src={LogoIcon} alt="Marvin Cespedes logo" /></Link>
        <FooterNav>
          <ul>
            <li><a href="https://www.linkedin.com/in/mcespo" title="Marvin's fancy LinkedIn page">linkedin</a></li>
            <li><a href="https://github.com/mcespo" title="Marvin's stellar Github page">github</a></li>
            <li><a href="https://codepen.io/mcespo/" title="Marvin's sexy Codepen page">codepen</a></li>
            <li><a href="https://vsco.co/mcespo/images/1" title="Marvin's toobular VSCO page">vsco</a></li>
            <li><a href="https://www.instagram.com/mcespo.jpeg/" title="Marvin's radical Instagram page">instagram</a></li>
            <li><a href="https://twitter.com/mcespo" title="Marvin's dope Twitter page">twitter</a></li>
            <li><a href="https://www.facebook.com/mcespo" title="Marvin's facebook page">facebook</a></li>
          </ul>
        </FooterNav>
        <FooterCopyright>
          Inspired by the layouts of both iA and A List Apart. Thanks to Avondale Type Company for the usage of ATC Duel (Diesel) Font.<br/>
          Thanks to Alyssa Low for her fantasic feedback. Crafted with love by Marvin A Cespedes {'\u00A9'} {Year}.
        </FooterCopyright>
      </FooterContainer>
    );
  }
}

const Year = new Date().getFullYear();

const FooterContainer = styled.footer`
  display: block;
  margin: 0 auto;
  width: 80vw;
  p, li {
    font-size: 0.75rem;
  }
  @media screen and (min-width: 55rem) {
    width: 75ch;
  }
`

const FooterIconLogo = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  margin: 4rem auto 3rem;
`

const FooterNav = styled.nav`
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    list-style: none;
    margin: 0.5rem;
  }
`

const FooterCopyright = styled.p`
  text-align: center;
`