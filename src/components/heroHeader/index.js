import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  overflow: hidden;
  position: relative;
`

const Image = styled.img`
  object-fit: cover;
  object-position: center center;
  height: 100%;
`

const HeroInfo = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
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