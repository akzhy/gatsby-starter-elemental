import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import SocialLinks from "../components/sociallinks";
import PortfolioList from "../components/list-portfolio";
import BlogList from "../components/list-blog";
import Contact from "../components/contact";
import "../style/wall.less";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winHeight: "100vh"
        };
    }

    createSVGElement(n, v) {
        n = document.createElementNS("http://www.w3.org/2000/svg", n);
        for (var p in v) n.setAttributeNS(null, p, v[p]);
        return n;
    }

    componentDidMount() {
        this.setWindowHeight();
        let _this = this;
        window.addEventListener("resize", function() {
            _this.setWindowHeight();
        });
        let sWidth = this.svg.clientWidth,
            tText = this.svg.querySelector("text"),
            tWidth = tText.getBoundingClientRect().width;

        if (tWidth > sWidth) {
            let tInnerText = tText.innerHTML;
            if (tInnerText.split(" ").length > 1) {
                tText.innerHTML = "";
                tInnerText.split(" ").forEach(function(e, i) {
                    let tSpan = _this.createSVGElement("tspan", {
                        dy: i === 0 ? "0em" : ".8em",
                        x: "50"
                    });
                    tSpan.innerHTML = e;
                    tText.appendChild(tSpan);
                });
                setTimeout(function() {
                    _this.svg.style.height =
                        tText.getBoundingClientRect().height + 70;
                    _this.svg.style.margin = "15px auto";
                }, 250);
            } else {
                while (tWidth > sWidth) {
                    let fontSize = parseInt(
                        window
                            .getComputedStyle(tText, null)
                            .getPropertyValue("font-size")
                    );
                    tText.style.fontSize = fontSize - 1 + "px";
                    tWidth = tText.getBoundingClientRect().width;
                }
            }
        }
    }
    setWindowHeight() {
        this.setState({
            winHeight: window.innerHeight
        });
    }
    render() {
        return (
            <Layout placeholder={false}>
                <SEO
                    lang="en"
                    title={this.props.data.site.siteMetadata.title}
                />
                <div
                    className="wall"
                    style={{ height: this.state.winHeight + "px" }}
                >
                    <div className="intro container">
                        <div className="main-title text-primary">
                            <svg
                                width="90%"
                                height="220px"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="xMidYMid slice"
                                ref={c => (this.svg = c)}
                            >
                                {this.props.data.site.siteMetadata
                                    .capitalizeTitleOnHome
                                    ? this.props.data.site.siteMetadata.title.toUpperCase()
                                    : this.props.data.site.siteMetadata.title}
                                <pattern
                                    id="wallPattern"
                                    patternUnits="userSpaceOnUse"
                                    width="100"
                                    height="100"
                                >
                                    <rect
                                        x="0"
                                        y="0"
                                        className="fill-primary"
                                        width="100"
                                        height="100"
                                    />
                                    <image
                                        xlinkHref="/images/wall.jpg"
                                        height="100"
                                        width="100"
                                        y="0"
                                        preserveAspectRatio="none"
                                    ></image>
                                </pattern>
                                <text
                                    fill="url(#wallPattern)"
                                    textAnchor="middle"
                                    x="50"
                                    y="50"
                                >
                                    {this.props.data.site.siteMetadata
                                        .capitalizeTitleOnHome
                                        ? this.props.data.site.siteMetadata.title.toUpperCase()
                                        : this.props.data.site.siteMetadata
                                              .title}
                                </text>
                            </svg>
                        </div>
                        <p className="tag-line text-secondary">
                            {this.props.data.site.siteMetadata.introTag}
                        </p>
                        <p className="caption text-tertiary">
                            {this.props.data.site.siteMetadata.description}
                        </p>
                        <a href="#portfolio" className="btn">
                            SEE WORKS
                        </a>
                    </div>
                    <div className="social-buttons">
                        <SocialLinks />
                    </div>
                </div>
                <PortfolioList />
                <BlogList />
                <Contact />
            </Layout>
        );
    }
}

export default IndexPage;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                capitalizeTitleOnHome
                titleImage
                introTag
                description
                social {
                    name
                    url
                    icon
                }
            }
        }
    }
`;
