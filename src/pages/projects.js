import React from 'react';
import styled from 'styled-components';

import imgA4TH from '../images/projects/project-a4th.jpg';
import imgDFP from '../images/projects/project-dfp.jpg';
import imgHLC from '../images/projects/project-human-library-chicago.jpg';
import imgIntersection from '../images/projects/project-intersection.jpg';
import imgMack from '../images/projects/project-mack.jpg';
import imgMcespo from '../images/projects/project-mcespo.jpg';
import imgUL from '../images/projects/project-ul.jpg';

const ProjectsPage = () => (
  <ProjectsSection>
    <h1>Projects</h1>
    <p>This page is a collection of a few items I've either developed in the past, am currently working on, or refactoring in some capacity. Projects are listed with the technologies I used to build said projects, as well as a brief description for additional context. Most of the times here are complete and are associated with previous client/agency work.</p>

    <Project>
      <h2>mcespo.com portfolio site</h2>
      <img src={imgMcespo} />
      <ul>
        <li>Design</li>
        <li>Javascript</li>
        <li>React</li>
        <li>JSX</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>Let's Ecrypt SSL</li>
        <li>Virtual Nginx Server</li>
      </ul>
      <p>Yeah, yeah, I get it. Posting the site you are currently visiting is a little on the nose. That said, this is one of the few projects I've built ENTIRELY from the ground-up. Designing the logo, creating an internal design library (albeit a small one), building the layout in Sketch, creating an Nginx server, setting SSL hooks, and pushing out this static site to be built entirely on React. It was not the easiest thing to do but it was crazy rewarding. Expect me to build more static content sites using some type of JS framework moving forward.</p>
    </Project>

    <Project>
      <h2>Ad Templates for Google DoubleClick for Publishers</h2>
      <img src={imgDFP} />
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>Javascript</li>
      </ul>
      <p>I sound like a tool but refactoring code is my jam. My last employer had us building out very clean and non-intrusive HTML Ads that I loved to pieces and occasionally cleaning out any of our existing formats. One of the more interesting projects was building an entirely new ad template from scratch. Our advertising platform allowed us to drag images and input into a field to generate particular units. The gallery unit itself consisted of using SASS to check against a value and create a condition that set the amount of hover boxes per the users input. Though not a very fluid representation on Github, this <a href="https://codepen.io/mcespo/pen/77fd96ce96236f71cedf67a991164334/">mock example</a> gives an idea on how we can use conditions in SASS to make a pretty malleable clickthrough unit.</p>
    </Project>

    <Project>
      <h2>UL Ad units</h2>
      <img src={imgUL} />
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>LESS</li>
        <li>jQuery</li>
      </ul>
      <p>I had the opportunity to build out my first set of animated advertising units in 2016. Given the quick turn-around and peculiar nature of javascript animation performance on multiple browsers, in the span of a few days, I was able to chip away and build out a series of ad units using the GSAP Animation Library. Though I haven't outright touched these in years, it's still a project I'm fond of. <a href="https://codepen.io/mcespo/pen/0a30f020b80ef95736991b8a84d3dea0">Web unit</a>, <a href="https://codepen.io/mcespo/pen/e1536cd58d8a03c82244036de61b31b4">Line unit</a>, <a href="https://codepen.io/mcespo/pen/376c46e02a49b71d2d9ab2469a7d1763">Sphere unit</a></p>
    </Project>

    <Project>
      <h2>Mack Trucks</h2>
      <img src={imgMack} />
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>LESS</li>
        <li>jQuery</li>
      </ul>
      <p>For a brief contracted project, I ended up co-developing a series of landing pages for Mack Trucks. It was nothing short of gorgeous and I love these pages, like, A LOT - though I wish I could take the credit for all of it, most of the work here was about 70% build out by myself and based on components that were already developed in-house, that I just either refactored or built on top of. <a href="http://respond.macktrucks.com/evolved">Evolved</a>, <a href="http://respond.macktrucks.com/nascar">VR</a>, <a href="http://respond.macktrucks.com/nascar">Nascar</a></p>
    </Project>

    <Project>
      <h2>Interection</h2>
      <img src={imgIntersection} />
      <ul>
        <li>Board Member</li>
        <li>Design</li>
        <li>Jekyll</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Webmaster</li>
        <li>Let's Ecrypt SSL</li>
        <li>Virtual Nginx Server</li>
      </ul>
      <p><a href="https://intersectionchicago.org/">Intersection</a> is a non-profit organization set on using dialog as a means for positive change. My close friend and president of this current 501C3 organization based in Chicago, and I worked on creating the general look and feel of the org. The site itself was built on Jekyll on another Nginx server using SSL. I'm looking to do a redesign in the coming weeks and will likely migrate this to VueJS if my initial testing plays out well.</p>
    </Project>

    <Project>
      <h2>Human Library Chicago</h2>
      <img src={imgHLC} />
      <ul>
        <li>Wordpress Child Theme</li>
        <li>PHP</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Virtual Nginx Server</li>
      </ul>
      <p>A subsidiary of Intersection, The Human Library is an organization that was originally created in Denmark. Individuals volunteer as human ‘books’ and participants in the event can ‘read’ the book- meaning they would have a one on one conversation with the volunteer and share in a dialogue about that individual’s experience. The current site for the <a href="http://humanlibrarychicago.org/">Chicago Chapter</a> is a standard Wordpress site that I've made modifications to under a child theme. I did very little here, but I at least wanted an excuse to bring more awareness to the org.</p>
    </Project>

    <Project>
      <h2>Artists for the Humanities</h2>
      <img src={imgA4TH} />
      <ul>
        <li>Board Member</li>
        <li>Design</li>
        <li>Wordpress Child Theme</li>
        <li>PHP</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Webmaster</li>
      </ul>
      <p><a href="http://a4th.org/">Artists for the Humanities</a> is an organization that uses expressive art as a means for coping from trauma. Based in Appleton Wisconsin, A4TH runs two programs: The Return and Recovery Program for Military Veterans, as well as Art as a Tool for Healing. The site itself is maintained using Wordpress and modified using a child theme. My goal is to redesign the org site, and possibly transform this into a headless Wordpress site  using React.</p>
    </Project>

  </ProjectsSection>
);

export default ProjectsPage

const ProjectsSection = styled.section`
  margin: 0 auto;
  width: 80vw;
  @media screen and (min-width: 55rem) {
    width: 75ch;
  }
`

const Project = styled.article`
  margin-bottom: 4rem;
  ul {
    display: flex;
    margin: 0;
    flex-flow: row wrap;
    justify-content: space-between;
    li {
      font-size: 0.75rem;
      list-style: none;
      padding: 0.5rem;
      border: 1px solid #444;
    }
  }
  div {
    display: grid;
  }
  img {
    box-shadow: 0 0 10px 0 #d2d2d2;
  }
`
