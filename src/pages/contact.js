import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Form, Description } from "../components/contact"

export default ({data, location}) => {
    return (
        <Layout
            seo={{
                title: "Contact",
            }}
            location={location}
        >
            <div className="container mx-auto py-12">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-5xl text-color-1">
                        Contact
                    </h2>
                </div>
                <div className="flex flex-wrap pb-40">
                    <div className="w-full lg:w-1/2 px-6">
                        <Form api={data.site.siteMetadata.contact.api_url}/>
                    </div>
                    <div className="w-full lg:w-1/2 px-6 pt-8">
                        <Description data={data.site.siteMetadata.contact} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                    api_url
                    description
                    mail
                    phone
                    address
                }
            }
        }
    }
`
