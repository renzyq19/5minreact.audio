import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'

import SitePost from '../components/SitePost'
import SiteSidebar from '../components/SiteSidebar'

class SiteIndex extends React.Component {
    render() {
        const pageLinks = []
        const sortedPages = this.props.data.allMarkdownRemark.edges
        console.log(this.props.data);
        const siteData = {title: 'Wrong'}

        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
                const title = access(page, 'data.title') || page.path
                // const description = access(page, 'data.description')
                const body = access(page, 'data.body').split('<hr>')[0]
                const datePublished = access(page, 'data.date')
              
                // 
                // Wasn't sure what this was doing, and it was already commented out, so I've left it here
                //
                //    const category = access(page, 'data.category')
                //    <span className='blog-category'>{ category }</span>

                pageLinks.push(
                    <div className='blog-post' key={title}>
                      <h2><Link style={ {    borderBottom: 'none',} } to={ prefixLink(page.path) } > { title } </Link></h2>
                      <time dateTime={ moment(datePublished).format('MMMM D, YYYY') }>
                        { moment(datePublished).format('DD MMMM YYYY') }
                      </time>
                      <p dangerouslySetInnerHTML={{ __html: body}} />
                    </div>
                )
            }
        })

        return (
            <DocumentTitle title={ siteData.title }>
              <div>
                <SiteSidebar isHome={true}/>
                <div className='content'>
                  <div className='main'>
                    <div className='main-inner'>
                      { pageLinks }
                    </div>
                  </div>
                </div>
              </div>
            </DocumentTitle>
        )
    }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object,
}

export default SiteIndex


export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        itunesUrl
        androidUrl
        soundcloudUrl
        rssUrl
        twitterUrl
        youTubeUrl
        emailUrl
      }
    }
   allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
    )
    {
      edges {
        node {
          fields { slug }
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
 `

