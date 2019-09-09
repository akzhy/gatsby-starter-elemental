import React from "react";
import SectionTitle from "../components/sectiontitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <section id="404" className="container" style={{ minHeight: "600px" }}>
            <div className="section-title">
                <SectionTitle title="404" />
                <p class="text-primary">
                    The page you are looking for doesn't exist, or has been
                    removed.
                </p>
            </div>
        </section>
    </Layout>
);

export default NotFoundPage;
