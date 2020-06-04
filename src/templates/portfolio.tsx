import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Calendar } from "react-feather"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Row, Col } from "../components/shortcodes/index"
import { PortfolioQuery } from "./__generated__/PortfolioQuery"

export default function porfolio ({ location, data }: PageProps<PortfolioQuery, {}>) {
    return (
        <Layout
            seo={{
                title: data.mdx.frontmatter.title,
                description: data.mdx.frontmatter.description,
                image: data.mdx.frontmatter.banner.publicURL,
            }}
            location={location}
        >
            <div className="md:px-4 mt-12 py-6 md:w-11/12 mx-auto">
                <div className="mx-auto relative">
                    <Img
                        fluid={
                            data.mdx.frontmatter.banner.childImageSharp.fluid
                        }
                    />
                    <div className="flex items-center justify-center relative lg:absolute w-full h-full top-0 left-0">
                        <div className="hidden lg:block absolute w-full h-full bg-black opacity-50"></div>
                        <div className="px-4 py-8 lg:p-0 relative z-10 text-center text-color-default lg:text-white bg-bgalt lg:bg-transparent">
                            <h1 className="text-5xl font-bold text-color-1 lg:text-white">
                                {data.mdx.frontmatter.title}
                            </h1>
                            <p className="mt-1 flex items-center justify-center">
                                <Calendar />{" "}
                                <span className="ml-2">
                                    {data.mdx.frontmatter.date}
                                </span>
                            </p>
                            <p className="mt-3 md:w-3/4 mx-auto">
                                {data.mdx.frontmatter.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/4 md:w-11/12 sm:w-full p-3 mt-4 md:mt-6 mx-auto lg:mt-12">
                    <MDXProvider components={{ Row, Col }}>
                        <MDXRenderer>{data.mdx.body}</MDXRenderer>
                    </MDXProvider>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query PortfolioQuery($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                description
                banner {
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
        }
    }
`
