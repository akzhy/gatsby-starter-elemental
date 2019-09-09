import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Date from "../components/date";
import { Row, Col } from "../components/page-components/grid";
import MD from "gatsby-custom-md";
import "../style/portfolio-singlepage.less";

const components = {
    row: Row,
    col: Col
};

export default function({ data }) {
    return (
        <Layout>
            <SEO
                lang="en"
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.description}
                image={data.markdownRemark.frontmatter.image.publicURL}
            />
            <div className="container">
                <article className="portfolio-post">
                    <div className="head text-primary">
                        <h1>{data.markdownRemark.frontmatter.title}</h1>
                        <p className="post-date">
                            <Date data={data.markdownRemark.frontmatter.date} />
                        </p>
                    </div>
                    <div className="content row flex">
                        <div className="col s12">
                            <MD
                                components={components}
                                htmlAst={data.markdownRemark.htmlAst}
                            />
                        </div>
                    </div>
                </article>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            htmlAst
            id
            frontmatter {
                title
                date
                description
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            srcSet
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
