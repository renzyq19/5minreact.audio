import React from 'react'
import PropTypes from 'prop-types'
import SiteSidebar from '../SiteSidebar'
import './style.css'

const SitePage = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <SiteSidebar />
      <div className="content">
        <div className="main">
          <div className="main-inner">
            <div className="blog-page">
              <div className="text">
                <h1>{ post.frontmatter.title }</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SitePage.propTypes = {
    data: PropTypes.object,
}

export default SitePage
