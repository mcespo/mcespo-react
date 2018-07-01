import React from 'react';
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({data}) => (
  <div>
    <h1>About Us</h1>
    <p>Lorem ipsum dolor amet palo santo organic quinoa gluten - free, lumbersexual mixtape occupy cloud bread vice.Put a bird on it readymade live - edge man braid cred.Poutine keytar pop - up 3 wolf moon brunch woke photo booth YOLO shabby chic fixie deep v live - edge.Polaroid fanny pack chambray bushwick aesthetic tofu ramps leggings pork belly bespoke four dollar toast selfies adaptogen.Mlkshk ramps disrupt, banh mi bitters messenger bag poutine keytar kickstarter put a bird on it.Succulents drinking vinegar kogi taiyaki wayfarers cold - pressed, beard YOLO williamsburg jean shorts food truck hell of pok pok banjo kale chips.</p>
    <p>Deep v normcore you probably haven 't heard of them adaptogen, kickstarter enamel pin 8-bit coloring book waistcoat snackwave cronut skateboard edison bulb street art freegan. Schlitz offal everyday carry lumbersexual vape crucifix keffiyeh chartreuse raclette keytar artisan tbh tofu. Kogi portland trust fund marfa. Man braid kitsch copper mug master cleanse hell of squid fingerstache four dollar toast yr blog.</p>
    {data.allMarkdownRemark.edges.map(({node}) => (
       <PostListing key={node.id} post={node} />
    ))}
  </div>
);


export default IndexPage

export const query = graphql`
  query BlogData {
    allMarkdownRemark(sort: {
      fields: [frontmatter___date],
      order: DESC
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY MM DD")
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`