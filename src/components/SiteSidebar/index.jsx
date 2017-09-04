import React from 'react'
import Link from 'gatsby-link'
import { RouteHandler } from 'react-router'
import SiteLinks from '../SiteLinks'
import './style.css'
import profilePic from '../../pages/5minreactpodcast_1400.png'

class SiteSidebar extends React.Component {
    render() {
        const isHome = this.props.isHome 
      console.log(this.props.data)
        const siteData = {title: 'Wrong', descr :'wrong'} || this.props.data.site.siteMetadata


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
            { siteData.descr }
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
                    <SiteLinks />
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

export const query = graphql`
  query SideBarQuery {
    site {
      siteMetadata {
        title
        descr
      }
    }
  }
`
