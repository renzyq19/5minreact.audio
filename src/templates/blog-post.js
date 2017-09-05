import React from 'react'

import DocumentTitle from 'react-document-title'

import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'

const BlogPostTemplate = ({ data }) => {
  console.log(data, 'blogposttemplate')
  const post = data.markdownRemark
  const meta = data.site.siteMetadata

  const layout = post.frontmatter.layout

  const template = layout === 'page' ?
    <SitePage /> :
    <SitePost post={post} />

  return (
    <DocumentTitle title={`${post.frontmatter.title} - ${meta.title}`}>
      <div>
        { template }
      </div>
    </DocumentTitle>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!){
  # Get post data
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    frontmatter {
      title
    }
  }

  # Get site data
  site {
    siteMetadata {
      title
    }
  }
}
`

