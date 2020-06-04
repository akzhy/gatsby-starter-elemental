import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { Disqus } from "gatsby-plugin-disqus"
import { CommentsQuery } from "./__generated__/CommentsQuery"
import { WindowLocation } from '@reach/router';

type CommentsProps = { title: string, location: WindowLocation<{}> };
const Comments: React.FC<CommentsProps> = ({ title, location }) => {
    const data = useStaticQuery<CommentsQuery>(graphql`
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