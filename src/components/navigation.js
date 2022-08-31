import React from 'react'
import { Link, graphql } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => {

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>Gatsby Starter Contentful</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation

export const pageQuery = graphql`
  query NavQuery {
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