import React from 'react'
import styled from 'styled-components'
import './variables.css'
import './global.css'
import Seo from './seo'
import Footer from './footer'
import NavBar from './navBar'



const MainContainer = styled.main`
  padding-top: 64px;
`
class Template extends React.Component {
  render() {
    const { children } = this.props

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