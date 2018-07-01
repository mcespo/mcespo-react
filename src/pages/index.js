import React from 'react';
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({data}) => (
  <div>
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