import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

import BlogCard from '../components/blogCard'
import HomeHero from '../components/heroHeader'
import FluidCard from '../components/fluidCard'
import MiniCard from '../components/miniCard'

const Section = styled.section`
  max-width: 1220px;
  width: 90%;
  margin: auto;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3333%);
  grid-column-gap: 1.5rem;
  padding-bottom: 3rem;

  @media (max-width: 767px) {
    display: block;
  }
`

const RowTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 1.5rem;
  padding-bottom: 3rem;

  @media (max-width: 767px) {
    display: block;
  }
`

const RowFour = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 23%);
  grid-column-gap: 1.5rem;

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
const Sidebar = styled.aside`
  width: 25%;
  position: fixed;
  right: 0;
  top: 64px;
  height: calc(100vh - 80px);
  z-index: 100;
  padding: 24px;

  @media (max-width: 1199px) {
    display: none;
  }
`

const FeaturedContainer = styled.ul`
  list-style-type: none;
`

const FeaturedList = styled.li`
  margin-bottom: 2rem;
`

const SidebarInfo = styled.div``

const InnerWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  height: 100%;
`

const MainContent = styled.div`
  margin-right: 25%;
  border-right: 1px solid black;

  @media (max-width: 1199px) {
    border: none;
    margin: 0;
  }
`

const Wrapper = styled.section``

const RootIndex = ({ data }) => {
  
  const blogPosts = data.allContentfulBlogPost.edges;
  const heroPost = blogPosts.filter(blogPost => blogPost.node.featuredPost === true)
  
  // Adding One Hero Post
  const oneHeroPost = [];
  const test = oneHeroPost.push(heroPost[0])

  //Section Tag Fitler
  const latestPost = blogPosts.filter(post => post.node.tags[0] === 'latest')
  const diaryPost = blogPosts.filter(post => post.node.tags[0] === 'diary')
  const winePost = blogPosts.filter(post => post.node.tags[0] === 'vitners-arcade')


  //Diary Post Filter
  const firstDiaryPost = []
  const pushDP = firstDiaryPost.push(diaryPost[0])
  const subDiaryPost = diaryPost.slice(1,4)

  console.log(subDiaryPost)

    return (
      <Layout>
        <Wrapper>
          <MainContent>
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
              <RowTwo>
                <div>
                  {firstDiaryPost.map(({node: post}) => (
                    <FluidCard 
                      key={post.slug}
                      slug={post.slug}
                      title={post.title}
                      tags={post.tags}
                      description={post.description.description}
                      image={post.heroImage.file.url}/>
                  ))}
                </div>
                <div>
                  {subDiaryPost.map(({node: post}) => (
                    <MiniCard 
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    tags={post.tags}
                    image={post.heroImage.file.url}/>
                  ))}
                </div>
              </RowTwo>
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
          </MainContent>
          <Sidebar>
            <InnerWrapper>
              <FeaturedContainer>
                {latestPost.map(({node: post}) => (
                  <FeaturedList key={post.slug}>
                    <small>{post.tags}</small>
                    <Link to={`/article/${post.slug}`}><h3>{post.title}</h3></Link>
                  </FeaturedList>
                ))}
              </FeaturedContainer>
              <SidebarInfo>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et interdum augue, eget iaculis nibh. Praesent dictum leo vel lorem efficitur rutrum</p>
                <ul style={{listStyleType: "none", padding: 0}}>
                  <li style={{ display: "inline-block", paddingRight: "0.5rem"}}><a><small>FW</small></a></li>
                  <li style={{  display: "inline-block", paddingRight: "0.5rem"}}><a><small>TW</small></a></li>
                  <li style={{  display: "inline-block", paddingRight: "0.5rem"}}><a><small>IG</small></a></li>
                </ul>
              </SidebarInfo>
            </InnerWrapper>
          </Sidebar>
        </Wrapper>
        
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
