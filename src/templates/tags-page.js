import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import BlogCard from '../components/blogCard'

const HeaderTitle = styled.h1`
  text-transform: capitalize;
  text-align: center;
`

const HeaderContainer = styled.div`
  padding: 6rem 0 2rem;
`

const Container = styled.div``

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 767px) {
    display: block;
  }
`

class TagPageTemplate extends React.Component {
  render() {
    
    //console.log(this.props)
    //console.log(this.props.pageContext.tag[0])
    //console.log(this.props.data.allContentfulBlogPost.edges)
    //console.log(pageTags)

    const pageTitle = this.props.pageContext.tag[0]
    const posts = this.props.data.allContentfulBlogPost.edges
    const pageTags = posts.filter(post => post.node.tags[0] === pageTitle)

    return (
      <Layout location={this.props.location}>
        <HeaderContainer>
          <HeaderTitle>{pageTitle}</HeaderTitle>
        </HeaderContainer>
        <Container>
          <Row>
            {pageTags.map(({node: post}) => (
                <BlogCard
                  key={post.slug}
                  alignment={post.true}
                  slug={post.slug} 
                  title={post.title}
                  tags={post.tags}
                  description={post.description.description}
                  image={post.heroImage.file.url}/>
              ))}
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default TagPageTemplate

export const pageQuery = graphql`
  query TagPageByTag {
    
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