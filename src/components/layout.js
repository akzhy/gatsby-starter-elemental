import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navigation"

import Footer from "./footer"
import SEO from "../utils/seo";

import "../style/index.css"

export default ({ children, front, seo, navPlaceholder=true, location }) => {
    return (
        <React.Fragment>
            <Head />
            <SEO {...seo} />
            <div className="wrapper">
                <div className="text-color-default bg-bg">
                    <Navbar front={front} navPlaceholder={navPlaceholder} location={location}/>
                    {children}
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

const Head = () => {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    icon
                }
            }
        }
    `)
    return (
        <Helmet>
            <link
                rel="icon"
                href={query.site.siteMetadata.icon}
                type="image/png"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Raleway:500,800&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    )
}
