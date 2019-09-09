import React from "react";

class SectionTitle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorPrimary: "#00",
            colorSecondary: "#00"
        };

        this._id = SectionTitle.counter;
    }

    static get counter() {
        SectionTitle._counter = (SectionTitle._counter || 0) + 1;
        return SectionTitle._counter;
    }

    componentDidMount() {
        this.setState({
            colorPrimary: window
                .getComputedStyle(this.cp, null)
                .getPropertyValue("color"),
            colorSecondary: window
                .getComputedStyle(this.cs, null)
                .getPropertyValue("color")
        });
    }

    render() {
        return (
            <React.Fragment>
                <span ref={c => (this.cp = c)} className="color-primary"></span>
                <span
                    ref={c => (this.cs = c)}
                    className="color-secondary"
                ></span>
                <svg
                    width="100%"
                    height="150"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <linearGradient
                        id={"primaryGradient" + this._id}
                        x1="0"
                        x2="100%"
                        y1="0"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor={this.state.colorPrimary} offset="0%" />
                        <stop
                            stopColor={this.state.colorSecondary}
                            offset="100%"
                        />
                    </linearGradient>
                    <text
                        textAnchor="middle"
                        x="50"
                        y="52"
                        fill={"url(#primaryGradient" + this._id + ")"}
                    >
                        {this.props.title}
                    </text>
                </svg>
            </React.Fragment>
        );
    }
}

export default SectionTitle;
