import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Calendar } from "react-feather"

export default ({ data }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-2 lg:p-4">
            <div className="transition-shadow duration-300 hover:shadow-2xl">
                <Link to={data.fields.slug} title={data.frontmatter.title}>
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
