import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import BlogItem from "../components/item-blog"
import Pagination from "../components/pagination"
import { BlogListQuery } from "./__generated__/BlogListQuery"

export default function blogList({ data, pageContext, location }: PageProps<BlogListQuery, {}>) {
    const blogItems = data.allMdx.edges.map(item => (
        <BlogItem data={item.node} key={item.node.id} />
    ))

    return (
        <Layout
            seo={{
                title: "Blog",
            }}
            location={location}
        >
            <div className="container mx-auto py-12">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-5xl text-color-1">
                        Blog
                    </h2>
                </div>
                <div className="flex flex-wrap">{blogItems}</div>
                <Pagination pageContext={pageContext} type="blog" />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allMdx(
            filter: { fields: { sourceName: { eq: "blog" } } }
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
                        date(formatString: "DD MMMM YYYY")
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
