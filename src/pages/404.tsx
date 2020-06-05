import React from "react"
import Layout from "../components/layout"
import { PageProps } from "gatsby";

export default ({ location }: PageProps<{}, {}>) => {
    return (
        <Layout
            seo={{
                title: "404",
            }}
            location={location}
        >
            <div className="container mx-auto py-12">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-7xl text-color-1">
                        4<span className="text-primary">0</span>4
                    </h2>
                </div>
                <div className="pb-20 text-center">
                    <p>Oops! That page does not exist. <span role="img" aria-label="Sad face">😞</span></p>
                    <p>
                        <button onClick={() => {
                            if(window.history) window.history.back();
                        }} className="text-link">Go Back?</button>
                    </p>
                </div>
            </div>
        </Layout>
    )
}
