import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ListItem = ({ data }) => {
    return (
        <li className="inline-block social-link mx-2">
            <a href={data.url} title={data.name} className="rounded-full inline-block transition-shadow duration-300 hover:shadow-2xl">
                <img src={data.icon} alt={data.name} className="block w-16"/>
            </a>
        </li>
    )
}

export default () => {
    const data = useStaticQuery(graphql`
        query SocialQuery {
            site {
                siteMetadata {
                    social {
                        name
                        url
                        icon
                    }
                }
            }
        }
    `)

    const items = data.site.siteMetadata.social
    let list = items.map((e, i) => (
        <ListItem key={e.url + "-" + e.icon + "-" + i} data={e} />
    ))
    return <ul className="mt-4">{list}</ul>
}
