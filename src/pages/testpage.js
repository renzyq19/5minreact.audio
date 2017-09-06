import React from 'react'
import SiteSidebar from '../components/SiteSidebar'

const Test = ({ data }) => {
  console.log(data, 'test')
  return (
    <div>
      <h1> {data.site.siteMetadata.title} </h1>
    </div>
  )
}

export default Test

export const pageQuery = graphql`
  query TestQuery{
    site {
      siteMetadata {
        title
      }
    }
  }
`
