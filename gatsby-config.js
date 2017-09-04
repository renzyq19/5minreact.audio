module.exports = {
  siteMetadata: {
    title: '5 minutes of React podcast',
    description: 'Podcast about React hot topics and JavaScript ecosystem.',
    twitterUrl: 'https://twitter.com/5minreact_audio',
    emailUrl: 'mailto:podcast@5minreact.audio',
    rssUrl: 'http://feeds.soundcloud.com/users/soundcloud:users:304879382/sounds.rss',
    androidUrl: 'http://www.subscribeonandroid.com./feeds.soundcloud.com/users/soundcloud:users:304879382/sounds.rss',
    itunesUrl: 'https://itunes.apple.com/ru/podcast/5-minutes-of-react/id1232187990?mt=2&at=1010lwCk&l=en',
    soundcloudUrl: 'https://soundcloud.com/5minreact_audio',
    youTubeUrl: 'https://www.youtube.com/channel/UC43OeCrRbp6hSEnNZWIHOGg/videos?flow=list&live_view=500&view=0&sort=dd',
  },


  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/articles/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-96344563',
      },
    },
  ],
  pathPrefix: '/',
}
