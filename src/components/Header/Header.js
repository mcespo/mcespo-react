import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Link from "gatsby-link";

import LogoText from "../../images/marvin-cespedes_logo-text.svg";


export default class Header extends Component {
  render() {
    const { data, location } = this.props;
    return (
      <HeaderContainer>
        <h1><Link to="/"><HeaderTextLogo src={LogoText} alt="Marvin Cespedes logo" /></Link></h1>
        <HeaderNav>
          <ul>
            <li>home</li>
            <li>projects</li>
            <li>resume</li>
            <li>blog</li>
          </ul>
        </HeaderNav>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.header`
  margin-top: 9vw;
`

const HeaderTextLogo = styled.img`
  position: absolute;
  width: 90vw;
  max-width: 1200px;
  top: -1.5vw;
  margin: 0 auto;
  left: 0;
  right: 0;
`

const HeaderNav = styled.nav`
  width: 75ch;
  margin: 0 auto;
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
  }
`