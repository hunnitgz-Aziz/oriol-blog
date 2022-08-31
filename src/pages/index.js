import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

import BlogCard from '../components/blogCard'
import HomeHero from '../components/heroHeader'


const Section = styled.section`
  max-width: 1220px;
  width: 90%;
  margin: auto;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 767px) {
    display: block;
  }
`

const RowFour = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 767px) {
    display: block;
  }
`

const Header = styled.h2`
  padding: 6rem 0 3rem;
`

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: black;
`


const RootIndex = ({ data }) => {
  
  const blogPosts = data.allContentfulBlogPost.edges;
  const heroPost = blogPosts.filter(blogPost => blogPost.node.featuredPost === true)
  
  // Adding One Hero Post
  const oneHeroPost = [];
  const test = oneHeroPost.push(heroPost[0])

  //
  const latestPost = blogPosts.filter(post => post.node.tags[0] === 'latest')
  const diaryPost = blogPosts.filter(post => post.node.tags[0] === 'diary')
  const winePost = blogPosts.filter(post => post.node.tags[0] === 'vitners-arcade')

    return (
      <Layout>
        {oneHeroPost.map(({node: post}) => (
          <HomeHero 
            key={post.slug}
            slug={post.slug}
            title={post.title}
            image={post.heroImage.file.url}
          />
        ))}
        <Section>
          <Header>Featured</Header>
            <Row>
            {latestPost.map(({node: post}) => (
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
            <Divider></Divider>
        </Section>
        <Section>
          <Header>Diary</Header>
          <Row>
            {diaryPost.map(({node: post}) => (
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
            <Divider></Divider>
        </Section>
        <Section>
          <Header>Vitners Arcade</Header>
          <RowFour>
            {winePost.map(({node: post}) => (
                <BlogCard
                  key={post.slug}
                  alignment={post.true}
                  slug={post.slug} 
                  title={post.title}
                  tags={post.tags}
                  description={post.description.description}
                  image={post.heroImage.file.url}/>
            ))}
            </RowFour>
        </Section>
      </Layout>
    )
  
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
          featuredPost
        }
      }
    }
  }
`
