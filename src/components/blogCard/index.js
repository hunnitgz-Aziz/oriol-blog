import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
`
const Title = styled.h3``
const Description = styled.p``
const Image = styled.img`
  max-width: 262px;
  height: 400px;
  object-fit: cover;
  margin: auto;
`

const TagContainer = styled.small`
  display: flex;
  padding: 1rem 0;
  justify-content: ${props => props.aligntags ? 'start' : 'center'};
`

const TagItem = styled.div`
  text-transform: uppercase;
`

const ReadMore = styled.div`

`


export default function BlogCard({title, description, slug, image, tags, alignment}) {

  return (
    <Container>
      <Link to={`/article/${slug}`}>
        <Image alt={title} src={image}/>
      </Link>
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
      <Description>{description}<ReadMore><small><Link to={`/article/${slug}`}>Read More</Link></small></ReadMore></Description>
    </Container>
  )
}



