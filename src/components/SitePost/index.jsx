import React from 'react'
import moment from 'moment'
import Link from 'gatsby-link'
import './style.css'

const DisqusThread = require('react-disqus-thread')

class SitePost extends React.Component {
    render() {
        const post = this.props.post
        const frontmatter = post.frontmatter
        const home = (
        <div>
          <Link className='gohome' to='/'> All episodes</Link>
        </div>
        )

        return (
            <div>
              { home }
              <div className='blog-single'>
                <div className='text'>
                  <h1>{ frontmatter.title }</h1>
                   <div className='date-published'>
                    { moment(frontmatter.date).format('DD MMMM YYYY') }
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  <DisqusThread
                    shortname="5minreact-audio"
                    title={post.title}
                    url={`http://5minreact.audio${frontmatter.pathname}`}
                  />
                </div>
              </div>
            </div>
            );
    }
}

SitePost.propTypes = {
    post: React.PropTypes.object.isRequired,
}

export default SitePost
