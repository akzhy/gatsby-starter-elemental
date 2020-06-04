import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Calendar } from "react-feather"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Row, Col } from "../components/shortcodes/index"

import Comments from "../components/comments"
import { BlogQuery } from "./__generated__/BlogQuery"

export default function blog({ location, data }: PageProps<BlogQuery, {}>) {
    return (
        <Layout
            seo={{
                title: data.mdx.frontmatter.title,
                description: data.mdx.frontmatter.description,
                image: data.mdx.frontmatter.banner.publicURL
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
                    <div className="relative w-full lg:w-3/4 md:w-11/12 sm:w-full p-6 box-border lg:box-content mx-auto bg-bg text-color-default blog-wall-content shadow-xl md:-mt-16 ">
                        <div className="p-3">
                            <h1 className="text-5xl font-bold text-primary">
                                {data.mdx.frontmatter.title}
                            </h1>
                            <p className="mt-1 flex">
                                <Calendar />{" "}
                                <span className="ml-2">
                                    {data.mdx.frontmatter.date}
                                </span>
                            </p>
                            <p className="mt-3">
                                {data.mdx.frontmatter.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/4 md:w-11/12 sm:w-full p-3 mx-auto mt-12 post-content">
                    <MDXProvider components={{ Row, Col }}>
                        <MDXRenderer>{data.mdx.body}</MDXRenderer>
                    </MDXProvider>
                </div>
                <div className="comments mt-8">
                    <Comments title={data.mdx.frontmatter.title} location={location} />
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query BlogQuery($slug: String!) {
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
