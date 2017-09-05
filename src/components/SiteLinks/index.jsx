import React from 'react'
import './style.css'

class SiteLinks extends React.Component {
  render() {
    const meta = this.props.siteData

    return (
      <div className="sitelinks">
        <ul>
          <li><a href={ meta.itunesUrl } target="_blank">iTunes</a></li>
          <li><a href={ meta.androidUrl } title="Subscribe on Android">Subscribe on Android</a></li>
          <li><a href={ meta.soundcloudUrl } target="_blank">SoundCloud</a></li>
          <li><a href={ meta.rssUrl } target="_blank">RSS</a></li>
          <li><a href={ meta.twitterUrl } target="_blank">Twitter</a></li>
          <li><a href={ meta.youTubeUrl } target="_blank">YouTube</a></li>
          <li><a href={ meta.emailUrl }>Email</a></li>
        </ul>

        <ul>
          <li><small><a href="http://opencollective.com/webpack" target="_blank">Silver sponsor of Webpack</a></small></li>
          <li><small><a href="http://5minreact.ru" target="_blank">Listen in Russian</a></small></li>
          <li><small>Author: <a href="https://twitter.com/petrmyazin" target="_blank">@PetrMyazin</a></small></li>
        </ul>
      </div>
    )
  }
}

export default SiteLinks

export const PageQuery = graphql`
query SiteLinksQuery {
  site {
    siteMetadata {
      itunesUrl
      androidUrl
      soundcloudUrl
      rssUrl
      twitterUrl
      youTubeUrl
      emailUrl
    }
  }
}`
