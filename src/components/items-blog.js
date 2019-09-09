import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Date from "./date";
import { Calendar } from "./icons";
import "../style/list-blog.less";

class BlogItem extends React.Component {
    componentDidMount() {
        this.color = window
            .getComputedStyle(this.textSecondary, null)
            .getPropertyValue("color");
        const calendar = this.textSecondary.querySelector("path");
        calendar.setAttribute("fill", this.color);
    }

    render() {
        return (
            <div className="item col s12 m6">
                <div className="box">
                    <div className="image">
                        <Img
                            fluid={
                                this.props.data.node.frontmatter.image
                                    .childImageSharp.fluid
                            }
                        />
                        <Link
                            to={this.props.data.node.fields.slug}
                            title={this.props.data.node.frontmatter.title}
                            aria-label={this.props.data.node.frontmatter.title}
                            className="overlay-link"
                            style={{ opacity: 0 }}
                        >
                            {this.props.data.node.frontmatter.title}
                        </Link>
                    </div>
                    <div className="content">
                        <h3 className="text-primary">
                            <Link
                                to={this.props.data.node.fields.slug}
                                title={this.props.data.node.frontmatter.title}
                            >
                                {this.props.data.node.frontmatter.title}
                            </Link>
                        </h3>
                        <p className="text-tertiary">
                            {this.props.data.node.frontmatter.description}
                        </p>
                        <p
                            className="date text-secondary"
                            ref={c => (this.textSecondary = c)}
                        >
                            <span className="icon">
                                <Calendar />
                            </span>
                            <Date
                                data={this.props.data.node.frontmatter.date}
                            />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default function(props) {
    const data = props.data.allMarkdownRemark.edges;
    let items = [];
    data.forEach(function(e, i) {
        if (props.remove && e.node.id === props.remove) return;
        items.push(<BlogItem key={e.node.id} data={e} />);
    });
    return <div className="row">{items}</div>;
}
