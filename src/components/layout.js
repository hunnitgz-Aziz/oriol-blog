import React from 'react'
import styled from 'styled-components'
import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import NavBar from './navBar'

import get from 'lodash/get'

const MainContainer = styled.main`
  padding-top: 64px;
`
class Template extends React.Component {
  render() {
    const { children } = this.props
    const posts = get(this.props, 'data.allContentfulBlogPost.edges')
    console.log(this.props)
    


    return (
      <>
        <Seo />
        <NavBar />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query ListByTag {
    
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