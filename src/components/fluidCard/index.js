import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const Container = styled.div`
`
const Title = styled.h4``
const Description = styled.p``
const Image = styled.img``

const TagContainer = styled.small`
  display: flex;
  padding: 1rem 0;
  justify-content: ${props => props.aligntags ? 'start' : 'center'};
`

const TagItem = styled.div`
  text-transform: uppercase;
`

const ReadMore = styled.div``


export default function BlogCard({title, description, slug, image, tags, alignment}) {

  return (
    <Container>
      <Link to={`/blog/${slug}`}>
        <Image alt={title} src={image}/>
      </Link>
      {tags?.length > 0 && (
        <TagContainer aligntags={alignment}>
          {tags.map((tag) => (
            <TagItem key={tag}>
              {tag}
            </TagItem>
          ))}
        </TagContainer>
      )}
      <Title>{title}</Title>
      <Description>{description}<ReadMore>Read More</ReadMore></Description>
    </Container>
  )
}



