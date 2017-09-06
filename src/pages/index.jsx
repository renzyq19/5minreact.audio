import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'
import DocumentTitle from 'react-document-title'

import SitePost from '../components/SitePost'
import SiteSidebar from '../components/SiteSidebar'
import './index.css'


const linksAtATime = 2

class SiteIndex extends React.Component {
  constructor(props){
    super(props)
    let linkstoshow = linksAtATime

    this.state = {
      linkstoshow
    }
  }
    render() {
      console.log(this.props.data)
      console.log(this.state.linkstoshow)
        const sortedPages = this.props.data.allMarkdownRemark.edges
        const siteData = this.props.data.site.siteMetadata

        const pageLink =  ({ node }) => {
                const title = node.frontmatter.title
                const body = node.html.split('<hr>')[0]
                const datePublished = node.frontmatter.date
              
                // 
                // Wasn't sure what this was doing, and it was already commented out, so I've left it here
                //
                //    const category = access(page, 'data.category')
                //    <span className='blog-category'>{ category }</span>

                return (
                    <div className='blog-post' key={title}>
                      <h2><Link style={ {    borderBottom: 'none',} } to={ node.fields.slug } > { title } </Link></h2>
                      <time dateTime={ moment(datePublished).format('MMMM D, YYYY') }>
                        { moment(datePublished).format('DD MMMM YYYY') }
                      </time>
                      <p dangerouslySetInnerHTML={{ __html: body}} />
                    </div> )
        }

        return (
            <DocumentTitle title={ siteData.title }>
              <div>
                <SiteSidebar isHome={true} siteData={siteData}/>
                <div className='content'>
                  <div className='main'>
                    <div className='main-inner'>
                      { sortedPages.slice(0,this.state.linkstoshow).map(pageLink) }
                      { this.state.linkstoshow < sortedPages.length ? (
                        <div className="loadmore" onClick={() => this.setState(prev => ({linkstoshow: prev.linkstoshow + linksAtATime}))} >
                          Load More
                        </div>
                      ) : <div />}
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

