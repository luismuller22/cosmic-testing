import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(
      this,
      'props.data.cosmicjsSettings.metadata.title',
      'props.data.cosmicjsSettings.metadata.title'
    )
    // const posts = get(this, 'props.data.allCosmicjsPosts.edges')
    // const author = get(this, 'props.data.cosmicjsSettings.metadata')
    // const location = get(this, 'props.location')
    const title = get(this, props.cosmicjsSettings.title)

    return (
      <Layout location={location}>
        <Helmet title={siteTitle} />
        <Bio settings={author} />
        <h1>{title}</h1>
        {/* {posts.map(({ node }) => {
          const title = get(node, 'title') || node.slug
          return (
            <div key={node.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={`posts/${node.slug}`}>
                  {title}
                </Link>
              </h3>
              <small>{node.created}</small>
              <p
                dangerouslySetInnerHTML={{ __html: node.metadata.description }}
              />
            </div>
          )
        })} */}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
      edges {
        node {
          metadata {
            description
          }
          slug
          title
          created(formatString: "DD MMMM, YYYY")
        }
      }
    }
    cosmicjsSettings(slug: { eq: "luis-page" }) {
      metadata {
        tite
        subtitle
        paragraph
      }
    }
  }
`
