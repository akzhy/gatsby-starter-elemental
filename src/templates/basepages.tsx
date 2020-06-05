import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { BasePagesQuery } from "./__generated__/BasePagesQuery";

export default function basePages({ data, location }: PageProps<BasePagesQuery, {}>) {
    return (
        <Layout seo={{
            title: data.mdx.frontmatter.title,
            description: data.mdx.frontmatter.description,
            image: data.mdx.frontmatter.image?.publicURL
        }}
        location={location}>
            <div className="boxed">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-5xl text-color-1">{data.mdx.frontmatter.title}</h2>
                </div>
                <div className="post-content px-4 lg:px-24 md:px-8 pb-12">
                    <MDXProvider>
                        <MDXRenderer>{data.mdx.body}</MDXRenderer>
                    </MDXProvider>
                </div>
            </div>
        </Layout>
    );
}


export const query = graphql`
    query BasePagesQuery($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                image {
                    publicURL
                }
                description
            }
        }
    }
`;
