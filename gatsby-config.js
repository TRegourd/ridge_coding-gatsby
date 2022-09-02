module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: false
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ridge Coding Développement Web',
        short_name: 'Ridge Coding',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#01998e',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png'
      }
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {}
    }
  ],
  // Customize your site metadata
  siteMetadata: {
    title: 'FlexiBlocks Theme',
    name: 'FlexiBlocks',
    description: 'My site description...'
  }
}
