import React from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title'

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
  try {
    inlinedStyles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

class HTML extends React.Component {
  render () {
    const title = DocumentTitle.rewind()
    const font = (
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,700&subset=latin"
        rel="stylesheet"
        type="text/css"
      />)
    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: inlinedStyles }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f7df1e" />
          <meta name="theme-color" content="#f7df1e" />
          {this.props.headComponents}
          <title>
            { title }
          </title>
          { font }
          { css }
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  body: PropTypes.string.isRequired,
}

export default HTML
