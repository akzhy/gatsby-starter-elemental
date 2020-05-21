import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PortfolioItem from "../components/item-portfolio"
import Pagination from "../components/pagination"

export default function({ data, pageContext, location }) {


    useEffect(() => {
        window.dispatchEvent(new CustomEvent('scroll'))
    }, [])

    const portfolioItems = data.allMdx.edges.map((item, i) => (
        <PortfolioItem data={item.node} key={item.node.id} even={(i + 1) % 2 === 0}/>
    ))

    return (
        <Layout
            seo={{
                title: "Portfolio",
            }}
            location={location}
        >
            <div className="container mx-auto py-12">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-5xl text-color-1">
                        Portfolio
                    </h2>
                </div>
                <div className="flex flex-wrap">{portfolioItems}</div>
                <div className="mt-12">
                    <Pagination pageContext={pageContext} type="portfolio" />
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query portfolioListPage($skip: Int!, $limit: Int!) {
        allMdx(
            filter: { fields: { sourceName: { eq: "portfolio" } } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1920) {
                                    srcSet
                                    ...GatsbyImageSharpFluid
                                }
                                id
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
