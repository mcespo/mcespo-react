import React, { Component } from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import Resume from "../../images/marvin-cespedes-resume-2018.pdf";
import LogoText from "../../images/marvin-cespedes_logo-text.svg";


export default class Header extends Component {
  render() {
    const { data, location } = this.props;
    return (
      <HeaderContainer>
        <h1><Link to="/"><HeaderTextLogo src={LogoText} alt="Marvin Cespedes logo" /></Link></h1>
        <HeaderNav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><a href={Resume}>resume</a></li>
          </ul>
        </HeaderNav>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.header`
  margin: 9rem auto 4rem;
  width: 80vw;
  @media screen and (min-width: 55rem) {
    width: 75ch;
  }
`

const HeaderTextLogo = styled.img`
  position: absolute;
  width: 80vw;
  top: -0.5rem;
  margin: 0 auto;
  left: 0;
  right: 0;
  @media screen and (min-width: 55rem) {
    top: -1.15rem;
    max-width: 1000px;
  }
`

const HeaderNav = styled.nav`
  margin: 0 auto;
  width: 80vw;
  @media screen and (min-width: 64rem) {
    width: 75ch;
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    flex-wrap: wrap;
    margin: 0 auto;
  }
`