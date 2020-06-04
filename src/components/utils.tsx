import React from "react"

import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { LogoQuery } from "./__generated__/LogoQuery"

const Logo = ({ className = "logo" }) => {
    const data = useStaticQuery<LogoQuery>(graphql`
        query LogoQuery {
            site {
                siteMetadata {
                    title
                    logo
                }
            }
        }
    `)

    return (
        <img
            src={data.site.siteMetadata.logo}
            alt={`${data.site.siteMetadata.title} - logo`}
            className={className}
        />
    )
}

const Link = props => {
    if (props.to) {
        if (props.to.startsWith("/")) {
            return <GatsbyLink {...props}>{props.children}</GatsbyLink>
        }

        return <a href={props.to}>{props.children}</a>
    } else {
        return (
            <button {...props}></button>
        )
    }
}

export { Logo, Link }
