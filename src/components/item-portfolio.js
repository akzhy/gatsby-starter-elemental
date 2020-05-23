import React, { useState, useEffect } from "react"
import { Button } from "./ui"
import Img from "gatsby-image"
import { ArrowRight } from "react-feather"

import Parallax from "../utils/parallax"

export default ({ data, even }) => {
    const [state, changeState] = useState({
        animated: false,
        percentage: 0,
    })

    const getWindowHeight = () => {
        const w = window
        const d = document
        const e = d.documentElement
        const g = d.getElementsByTagName("body")[0]

        return w.innerHeight || e.clientHeight || g.clientHeight
    }

    const updateState = p => changeState({ ...state, ...p })

    const percentageThreshold = 0.3

    let transform = 0

    useEffect(() => {
        transform = Math.min(getWindowHeight() / 2, 300) * Math.max(0, state.percentage - percentageThreshold)
    }, [])

    if (state.percentage > percentageThreshold && !state.animated)
        updateState({ animated: true })

    return (
        <Parallax changePercentage={updateState}>
            <div className="large-container mx-auto">
                <div
                    className={`my-4 py-8 lg:py-24 portfolio-item lg:flex ${
                        state.animated ? "begin-animation" : ""
                    } ${even ? "even flex-row-reverse" : ""}`}
                >
                    <div className="relative flex-1">
                        <div
                            className="image relative z-10"
                            style={{
                                transform: `translate(0px,${transform}px)`,
                            }}
                        >
                            <Img
                                fluid={
                                    data.frontmatter.image.childImageSharp.fluid
                                }
                                alt={data.frontmatter.title}
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex lg:px-6 items-center">
                        <div
                            className={`flex flex-1 flex-wrap  ${
                                even ? "lg:justify-end lg:text-right" : ""
                            }`}
                        >
                            <h3 className="text-color-1 text-5xl font-black to-up">
                                {data.frontmatter.title}
                            </h3>
                            <p className="lg:mt-4 to-up">
                                {data.frontmatter.description}
                            </p>
                            <Button
                                to={data.fields.slug}
                                label={`View ${data.frontmatter.title}`}
                                title={"View"}
                                iconRight={<ArrowRight />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}
