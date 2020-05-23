import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const List = ({ name, className = "", liClassName="", current }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    navLinks {
                        name
                        url
                    }
                    darkmode
                    switchTheme
                }
            }
        }
    `)
    const items = data.site.siteMetadata.navLinks
    const list = items.map((e, i) => {return(
        <ListItem
            key={`navigation-${name}-${i}`}
            data={e}
            active={`/${current}` === e.url}
            liClassName={liClassName}
        />
    )})

    return <ul className={className}>{list}</ul>
}

const ListItem = ({ data, active, liClassName }) => {
    return (
        <li className={`${liClassName} ${(active ? "active" : "")}`}>
            <Link to={data.url} title={data.name} className="text-color-2">
                <span>{data.name}</span>
            </Link>
        </li>
    )
}

export default List
