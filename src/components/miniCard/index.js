import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const Container = styled.div`
`
const Title = styled.h5``
const Description = styled.p``
const Image = styled.img`
  max-width: 120px;
  height: 155px;
  object-fit: cover;

`

const TagContainer = styled.small`
  display: flex;
  padding-bottom: 1rem;
`

const TagItem = styled.div`
  text-transform: uppercase;
`

const ReadMore = styled.div`

`

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: black;
  margin: 1rem 0;
`

const Wrapper = styled.div`
  display: flex;
`

const Content = styled.div`
  padding-left: 0.5rem;
`


export default function MiniCard({title, slug, image, tags, alignment}) {

  return (
    <Container>
      <Link to={`/article/${slug}`}>
        <Wrapper>
          <Image alt={title} src={image}/>
          <Content>
            {tags?.length > 0 && (
                <TagContainer aligntags={alignment}>
                  {tags.map((tag) => (
                    <TagItem key={tag}>
                      <small><Link to={`/topic/${tag}`}>{tag}</Link></small>
                    </TagItem>
                  ))}
                </TagContainer>
              )}
            <Title>{title}</Title>
          </Content>
        </Wrapper>
      </Link>
      <Divider></Divider>
    </Container>
  )
}



