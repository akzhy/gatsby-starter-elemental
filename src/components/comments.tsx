import React, { useEffect, useState } from "react"

import { useStaticQuery, graphql } from "gatsby"

import { Disqus } from "gatsby-plugin-disqus"
import { CommentsQuery } from "./__generated__/CommentsQuery"
import { WindowLocation } from "@reach/router"
import store from "../utils/store"

type CommentsProps = { title: string; location: WindowLocation<{}> }
const Comments: React.FC<CommentsProps> = ({ title, location }) => {

    // State used to reload disqus on theme change

    const [counter, setCounter] = useState(0)

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

    useEffect(() => {
        store.listen("theme:change", _ => {
            setCounter(p => p+1)
        })
    }, [])

    const url = data.site.siteMetadata.siteUrl + location
    const noDisqusShortName = data.site.siteMetadata.disqus === null

    if (noDisqusShortName) return null
    return <Disqus url={url} title={title} identifier={title} counter={counter} />
}

export default Comments
