import React, { Component } from 'react';
import PostListing from '../components/Posts/PostListing';

const Blog = ({data}) => (
  <article>
    <h1>I have thoughts</h1>
    <p>I know what youre thinking. I cant possibly take my potential future hire seriously unless they write something smart about the web, and have hot takes on tabs vs spaces. Not to worry, below is a series of posts that I did not just write in the span of a few weeks in the hopes of you hiring me.</p>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}
  </article>
);

export default Blog;

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