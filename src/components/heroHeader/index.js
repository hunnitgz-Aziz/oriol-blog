import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    background: rgba(0,0,0,0.2);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`

const Image = styled.img`
  object-fit: cover;
  object-position: center center;
  height: 100%;
`

const HeroInfo = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 3rem;
  z-index: 1;
`

const HeroTitle = styled.h1`
  color: white;
  font-style: italic;
`

export default function HomeHero({title, image, slug}) {
  return (
    <Container>
      <Image alt={title} src={image} />
      <HeroInfo>
        <Link to={`/article/${slug}`}>
          <HeroTitle>{title}</HeroTitle>
        </Link>
      </HeroInfo>
    </Container>
  )
}