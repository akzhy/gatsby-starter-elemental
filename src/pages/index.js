import React, { useEffect, useRef, useState } from "react"
import { graphql } from "gatsby"

import { ArrowRight } from "react-feather"

import Layout from "../components/layout"
import { Button } from "../components/ui"

import ItemPortfolio from "../components/item-portfolio"
import ItemBlog from "../components/item-blog"
import { Form, Description as ContactDescription } from "../components/contact"

export default ({ data, location }) => {
    const siteData = data.site.siteMetadata

    const portfolioList = data.portfolio.edges.map((item, _) => (
        <ItemPortfolio
            data={item.node}
            key={`p-item-index-${item.node.id}`}
            even={(_ + 1) % 2 === 0}
        />
    ))

    const blogList = data.blog.edges.map(item => (
        <ItemBlog data={item.node} key={`b-item-index-${item.node.id}`} />
    ))

    return (
        <Layout front={true} seo={{
            title: 'Home',
            description: siteData.description,
        }}
        navPlaceholder={false}
        location={location}
        >
            <Wall data={siteData} />
            {siteData.about !== "" && <About data={siteData.about} />}
            <div className="px-4 lg:px-0">
                {portfolioList}
            </div>
            <Blog>{blogList}</Blog>
            <Contact data={siteData.contact}/>
        </Layout>
    )
}

const Wall = ({ data }) => {
    const wall = useRef(null)

    const twoColumnWall = data.twoColumnWall

    const [state, changeState] = useState({
        loaded: false,
        supportsBlend: false,
    })

    useEffect(() => {
        if (window.CSS && !state.loaded) {
            if (CSS.supports("mix-blend-mode", "screen")) {
                wall.current.classList.add("supports-blend")
                changeState({
                    loaded: true,
                    supportsBlend: true,
                })
            }
        }
    }, [state.loaded])

    const hAttributes = {}

    if (!twoColumnWall && data.titleImage) {
        hAttributes.style = {
            backgroundImage: `url('${data.titleImage}')`,
        }
    }

    const innerComponents = (
        <React.Fragment>
            <div className="title" {...hAttributes}>
                <h1
                    className={`text-5xl lg:text-7xl font-black ${
                        data.capitalizeTitleOnHome ? "uppercase" : ""
                    }`}
                >
                    {data.title}
                </h1>
            </div>
            <p className="text-xl text-color-2">{data.introTag}</p>
            <p className="text-lg mt-4">{data.description}</p>
            <Button title="SEE WORKS" type="button" iconRight={<ArrowRight />} />
        </React.Fragment>
    )

    if (twoColumnWall) {
        return (
            <div
                className="wall h-screen flex relative justify-center items-center overflow-hidden"
                ref={wall}
            >
                <div className="flex-1 lg:block absolute lg:relative">
                    <img src={data.titleImage} alt="" className="h-full w-auto max-w-none lg:h-auto lg:w-full"/>
                </div>
                <div className="flex-1 text-center p-3 relative z-10 lg:text-left lg:pl-8">{innerComponents}</div>
            </div>
        )
    }

    return (
        <div
            className="wall h-screen flex flex-col justify-center items-center text-center"
            ref={wall}
        >
            {innerComponents}
        </div>
    )
}


const About = ({ data }) => {
    return (
        <div className="boxed">
            <div className="px-4 py-20 text-center lg:py-40 lg:px-0">
                <h2 className="text-color-1 font-black text-6xl">About</h2>
                <p className="mt-5 text-lg">{data}</p>
            </div>
        </div>
    )
}

const Blog = ({ children }) => {
    return (
        <div className="container mx-auto px-4 lg:px-0">
            <div className="pt-20 pb-10 text-center lg:pt-40 lg:pb-20">
                <h2 className="text-color-1 font-black text-6xl">Blog</h2>
            </div>
            <div className="flex flex-wrap">{children}</div>
        </div>
    )
}


const Contact = ({data}) => {
    return (
        <div className="container mx-auto">
            <div className="pt-20 pb-10 lg:pt-40 lg:pb-20 text-center">
                <h2 className="text-color-1 font-black text-6xl">Contact</h2>
            </div>
            <div className="flex flex-wrap pb-40">
                <div className="w-full lg:w-1/2 px-6">
                    <Form />
                </div>
                <div className="w-full lg:w-1/2 px-6 pt-8">
                    <ContactDescription data={data}/>
                </div>
            </div>
        </div>
    )
}

export const query = graphql`
    query {
        site: site {
            siteMetadata {
                title
                description
                capitalizeTitleOnHome
                titleImage
                twoColumnWall
                introTag
                description
                about
                contact {
                    description
                    mail
                    phone
                    address
                }
                social {
                    name
                    url
                    icon
                }
            }
        }
        portfolio: allMdx(
            filter: { fields: { sourceName: { eq: "portfolio" } } }
            limit: 6
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        blog: allMdx(
            filter: { fields: { sourceName: { eq: "blog" } } }
            limit: 6
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        date(formatString: "DD MMMM YYYY")
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
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
