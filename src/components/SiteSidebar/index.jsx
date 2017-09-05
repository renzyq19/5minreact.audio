import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import SiteLinks from '../SiteLinks'
import './style.css'
import profilePic from '../../pages/5minreactpodcast_1400.png'

const SiteSidebar = ({ siteData, data, isHome }) => {
  console.log(data, 'sidebar')
  siteData = data ? data.site.siteMetadata : siteData
  const homelink = <Link style={{ textDecoration: 'none', borderBottom: 'none', color: 'inherit' }} to="/" > { siteData.title } </Link>
  const header = (
    <header>
      <Link style={{ textDecoration: 'none', borderBottom: 'none', outline: 'none' }} to="/">
        <img src={profilePic} width="256" height="256" alt="profile" />
      </Link>
      { isHome ? <h1>{homelink}</h1> : <h2>{homelink}</h2> }
      <p>
        { siteData.description }
      </p>
    </header>
  )

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="blog-details">
          <header>
            { header }
          </header>
        </div>
        <div className="blog-options">
          <footer>
            <SiteLinks siteData={siteData} />
          </footer>
        </div>
      </div>
    </div>
  )
}

SiteSidebar.propTypes = {
  isHome: PropTypes.bool,
  siteData: PropTypes.object,
  data: PropTypes.object,
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
