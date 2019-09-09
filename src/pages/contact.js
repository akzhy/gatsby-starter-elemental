import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact";

export default function() {
    return (
        <Layout>
            <SEO lang="en" title="Contact" />
            <div style={{ minHeight: "600px" }}>
                <Contact />
            </div>
        </Layout>
    );
}
