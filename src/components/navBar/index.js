import React, {useState} from "react"
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import get from 'lodash/get'

const Container = styled.nav`
  position: fixed;
  z-index: 1001;
  width: 100%;
  background: white;
  height: 64px;
`

const Wrapper = styled.div`
  display: flex;
  height: 64px;
  justify-content: space-between;
  z-index: 1001;
  position: relative;
  align-content: center;
  z-index: 1001;
  background: white;
  padding: 16px;
  border-bottom: 1px solid black;
`

const MenuIcon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;


  div {
    width: 1.5rem;
    height: 2px;
    transform-origin: 1px;
    position: relative;
    background: black;
    transition: transform 300ms, opacity 300ms;

    &:first-child {
      transform: ${({nav}) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({nav}) => (nav ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({nav}) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Menu = styled.div`
  background: white;
  position: absolute;
  left: 0;
  width: 100%;
  transition: transform 300ms;
  transform: ${({nav}) => (nav ? "translateY(0)" : "translateY(-100%)")};
  z-index: 999;
  top: 64px;
  border-bottom: 1px solid black;

  ul {
    list-style-type: none;
    padding-left: 16px;
  }
`

const SiteLogo = styled.h1`
  margin: 0;
  font-size: 24px;
  line-height: 1;
`

const MenuLink = styled(props => <Link {...props}/>)`
  font-size: 48px;
`


export default function NavBar() {
  const [nav, showNav] = useState(false)

  return (
    <Container>
      <Wrapper>
      <SiteLogo><Link to="/">Oriol</Link></SiteLogo>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
      </Wrapper>
      <Menu nav={nav}>
        <ul>
          <li><MenuLink to="/topic/latest">Latest</MenuLink></li>
          <li><MenuLink to="/topic/diary">Diary</MenuLink></li>
          <li><MenuLink to="/topic/vitners-arcade">Vitners Arcade</MenuLink></li>
        </ul>
      </Menu>
    </Container>
  )
  
}