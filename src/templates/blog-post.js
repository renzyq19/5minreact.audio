import React from 'react'

import DocumentTitle from 'react-document-title'

import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const meta = this.props.data.site.siteMetadata

    const layout = post.frontmatter.layout

    let template

    if (layout === 'page') {
      template = <SitePage {...this.props} />
    } else {
      template = <SitePost post={post} />
    }


    return (
      <DocumentTitle title={`${post.frontmatter.title} - ${meta.title}`}>
        <div>
          { template }
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
    }
  }
}
`

