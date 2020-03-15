import React from "react";

import { StaticQuery, graphql } from "gatsby";

import { Disqus } from "gatsby-plugin-disqus";

function Comments({ url, title }) {
    const disqusConfig = {
        url,
        identifier: title,
        title
    };
    return <Disqus config={disqusConfig} />;
}

export default ({ title, location }) => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            siteUrl
                            disqus
                        }
                    }
                }
            `}
            render={data => {
                const url = data.site.siteMetadata.siteUrl + location;
                const noDisqusShortName =
                    data.site.siteMetadata.disqus === null;
                if (noDisqusShortName) return null;
                return <Comments url={url} title={title} />;
            }}
        />
    );
};
