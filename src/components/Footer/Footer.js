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
            <li>home</li>
            <li>projects</li>
            <li>resume</li>
            <li>blog</li>
          </ul>
        </FooterNav>
        <FooterCopyright>
          Inspired by the layouts of both iA and A List Apart. Thanks to Avondale Type Company for the usage of ATC Duel (Diesel) Font.
          Thanks to Alyssa Low for her fantasic feedback. Crafted with love by Marvin A Cespedes © 2017.
        </FooterCopyright>
      </FooterContainer>
    );
  }
}

const FooterContainer = styled.footer`
  width: 75ch;
  margin: 0 auto;
`

const FooterIconLogo = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  margin: 0 auto;
`

const FooterNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
  }
`

const FooterCopyright = styled.p`
  text-align: center;
`