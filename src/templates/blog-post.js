import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import * as styles from './blog-post.module.css'

import styled from 'styled-components'

const PostContainer = styled.div``

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    const plainTextDescription = post.description.description
    const plainTextBody = post.body.body
    

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={plainTextDescription}
          image={`http:${post.heroImage.file.url}`}
        />
        {/* <Hero
          image={post.heroImage?.gatsbyImage}
          title={post.title}
          content={post.description.description}
        /> */}
        <div className={styles.container}>
          <div className={styles.article}>
            <PostContainer dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
          </div>
        </div>
        
      </Layout>
     
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      heroImage {
        file {
          url
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      tags
      description {
        description
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
