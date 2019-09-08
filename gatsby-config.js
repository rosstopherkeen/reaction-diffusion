module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-147253509-1",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Reaction Diffusion`,
    author: `Prajwal Bhaskar`,
    description: `A site to learn how to create on the web.`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/rosstopherkeen`,
      },
      {
        name: `Github`,
        url: `https://github.com/rosstopherkeen`,
      },
      {
        name: `Instagram`,
        url: `https://instagram.com/rosstopherkeen`,
      },
    ],
  },
}
