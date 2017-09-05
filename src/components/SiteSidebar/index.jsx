import React from 'react'
import Link from 'gatsby-link'
import { RouteHandler } from 'react-router'
import SiteLinks from '../SiteLinks'
import './style.css'
import profilePic from '../../pages/5minreactpodcast_1400.png'

class SiteSidebar extends React.Component {
    render() {
        const isHome = this.props.isHome 
        const siteData = this.props.siteData || this.props.data.site.siteMetadata
        let header = (
        <header>
          <Link style={ {    textDecoration: 'none',    borderBottom: 'none',    outline: 'none'} } to={ '/' }>
          <img src={ profilePic } width='256' height='256' />
          </Link>
          { isHome ? (
            <h1><Link style={ {    textDecoration: 'none',    borderBottom: 'none',    color: 'inherit'} } to={ '/' }> { siteData.title } </Link></h1>
            ) :
            <h2><Link style={ {    textDecoration: 'none',    borderBottom: 'none',    color: 'inherit'} } to={ '/' }> { siteData.title } </Link></h2> }
          <p>
            { siteData.description }
          </p>
        </header>
        )

        return (
            <div className='sidebar'>
              <div className='sidebar-inner'>
                <div className='blog-details'>
                  <header>
                    { header }
                  </header>
                </div>
                <div className='blog-options'>
                  <footer>
                    <SiteLinks siteData={siteData}/>
                  </footer>
                </div>
              </div>
            </div>
            );
    }
}

SiteSidebar.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
}

export default SiteSidebar

export const pageQuery = graphql`
  query SideBarQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
