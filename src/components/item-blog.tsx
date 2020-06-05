import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Calendar } from "react-feather"
import { BlogListQuery_allMdx_edges_node } from "../templates/__generated__/BlogListQuery"
import { IndexPageQuery_blog_edges_node } from "../pages/__generated__/IndexPageQuery"

type ItemBlogProps = BlogListQuery_allMdx_edges_node | IndexPageQuery_blog_edges_node
export const ItemBlog: React.FC<{ data: ItemBlogProps}> = ({ data }) => {

    const [focused, changeFocused] = useState(false);

    return (
        <div className="blog-item w-full md:w-1/2 lg:w-1/3 p-4">
            <div className={`transition-all duration-300 hover:shadow-2xl shadow ${focused && 'focused'}`}>
                <Link to={data.fields.slug} title={data.frontmatter.title} onFocus={() => changeFocused(true)} onBlur={() => changeFocused(false)}>
                    <div className="image">
                        <Img
                            fluid={data.frontmatter.image.childImageSharp.fluid}
                            alt={data.frontmatter.title}
                            className="w-full"
                        />
                    </div>
                    <div className="p-4 py-3">
                        <h4 className="text-color-2 font-black text-3xl pt-1">
                            {data.frontmatter.title}
                        </h4>
                        <div className="flex items-center text-secondary">
                            <Calendar className="stroke-current"/>
                            <p className="pl-2 text-color-default font-sans">{data.frontmatter.date}</p>
                        </div>
                        <p className="pt-3 text-color-default">
                            {data.frontmatter.description}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ItemBlog;