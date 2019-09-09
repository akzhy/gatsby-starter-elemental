import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function() {
    const query = useStaticQuery(graphql`
        query LogoQuery {
            site {
                siteMetadata {
                    title
                    logo
                }
            }
        }
    `);
    return (
        <img
            className="logo"
            src={query.site.siteMetadata.logo}
            alt={query.site.siteMetadata.title}
        />
    );
}
