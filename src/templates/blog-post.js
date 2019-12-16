import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout/layout"
import Img from "gatsby-image"
import before from '../../content/assets/post__before.png'
import after from '../../content/assets/post__after.png'


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
<<<<<<< HEAD
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title}
              </Link>
            )}
          </li>
        </ul>
=======
        <div className="post">
          <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
          <div className="post__info">
            <p className="post__date">{post.frontmatter.date}</p>
            <div className="post__tag">ENGLISH</div>
          </div>
          <h1 className="post__title">{post.frontmatter.title}
          </h1>
          <div className="post__content">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
          <ul className="post__index">
            <li className="post__indexItem">
              {previous && (
                <Link to={`blog${previous.fields.slug}`} rel="prev">
                  <img src={before} />{previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li className="post__indexItem">
              {next && (
                <Link to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title}
                  <img src={after} />
                </Link>
              )}
            </li>
          </ul>
        </div>
>>>>>>> develop
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 130)
      body
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 740) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
