import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Logo } from "./utils"
import Navlinks from "./navigation/list"


export default function() {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    footerLinks {
                        name
                        url
                    }
                }
            }
        }
    `)

    const footerLinks = query.site.siteMetadata.footerLinks.map((item, _) => (
        <ListItem data={item} key={`footer-n-l-${_}`} />
    ))

    return (
        <footer className="footer bg-bgalt py-12">
            <div className="container mx-auto text-center">
                <div className="flex justify-center my-3 mb-6">
                    <Link to="/" title={query.site.siteMetadata.title}>
                        <Logo className="w-12"/>
                    </Link>
                </div>
                <div className="text-color-2 my-3 footer-links animated-link-parent">
                    <Navlinks className="flex items-center justify-center"/>
                </div>
                <div
                    className="text-color-2 my-3"
                >
                    <ul>
                    {footerLinks} 
                    </ul>
                </div>
                <p className="text-color-default text-lg">
                    Copyright &copy; {query.site.siteMetadata.title}{" "}
                    {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}

const ListItem = ({ data }) => {
    return (
        <li className="inline-block mx-3 animated-link-parent">
            <Link to={data.url} title={data.name}>
                <span>{data.name}</span>
            </Link>
        </li>
    )
}
