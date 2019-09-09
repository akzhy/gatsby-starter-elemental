import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PortfolioItems from "../components/items-portfolio";
import SectionTitle from "../components/sectiontitle";
import Pagination from "../components/pagination";
import SEO from "../components/seo";

class PortfolioList extends React.Component {
    render() {
        const query = this.props.datas;
        if (query.allMarkdownRemark.edges.length > 0) {
            return (
                <section id="portfolio" className="container">
                    <div className="section-title">
                        <SectionTitle title="PORTFOLIO" />
                    </div>
                    <PortfolioItems data={query} />
                    <Pagination
                        pathContext={this.props.pathContext}
                        type="portfolio"
                    />
                </section>
            );
        } else {
            return <React.Fragment></React.Fragment>;
        }
    }
}

export default function({ data, pathContext }) {
    return (
        <Layout>
            <SEO lang="en" title="Portfolio" />
            <PortfolioList datas={data} pathContext={pathContext} />
        </Layout>
    );
}

export const query = graphql`
    query portfolioListPage($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/portfolio/" } }
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
                        date
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
`;
