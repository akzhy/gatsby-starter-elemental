import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { Disqus } from "gatsby-plugin-disqus"


const Comments = ({ title, location }) => {
    const data = useStaticQuery(graphql`
        query CommentsQuery {
            site {
                siteMetadata {
                    siteUrl
                    disqus
                }
            }
        }
    `)

    const url = data.site.siteMetadata.siteUrl + location
    const noDisqusShortName = data.site.siteMetadata.disqus === null

    if (noDisqusShortName) return null

    return <Disqus url={url} title={title} identifier={title} />
}

export default Comments;