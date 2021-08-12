const siteMetadata = {
    title: `Casey's Code Blog`,
    description: `My coding blog for documenting my coding journey`,

}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
	`gatsby-plugin-styled-components`,
	{
	    resolve: `gatsby-plugin-mdx`,
	    options: {
		extensions: [`.mdx`, `.md`],
	    },
	},
	{
	    resolve: `gatsby-source-filesystem`,
	    options: {
		path: `${__dirname}/posts`,
		name: `posts`,
	    },
	},
    ],
}
