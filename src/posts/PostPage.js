import React, { Component } from 'react';
import Img from "gatsby-image";

export default class PostPage extends Component {
  render() {
    const {data} = this.props;
    return <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY MM DD")
        tags
      }
    }
  }
`;