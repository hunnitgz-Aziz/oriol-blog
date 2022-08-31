import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import BlogCard from '../components/blogCard'

const BlogIndex = ({ data }) => {

    const blogPosts = data.allContentfulBlogPost.edges;

    return (
      <Layout>
        <Seo title="Blog" />
        <Hero title="Blog" />
        <div>
          {blogPosts.map(({node: post}) => (
              <BlogCard
                key={post.slug}
                slug={post.slug} 
                title={post.title}
                tags={post.tags}
                description={post.description.descripton}
                image={post.heroImage.file.url}/>
          ))}
        </div>
      </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          tags
          slug
          body {
            body
          }
          description {
            description
          }
          heroImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`
