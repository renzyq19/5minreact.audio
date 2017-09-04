import React from 'react'

import DocumentTitle from 'react-document-title'

import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const meta = this.props.data.site.siteMetadata

    let layout, template

    //template = <SitePage {...this.props} />

    return (
      <DocumentTitle title={`${post.frontmatter.title} - ${meta.title}`}>
        <div>
        </div>
      </DocumentTitle>
    )
  }
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
      descr
    }
  }
}
`

