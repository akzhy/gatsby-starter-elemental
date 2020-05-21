import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Logo } from "./utils"
import List from "./navigation/list"

const Navbar = ({ navPlaceholder, location }) => {

    const currentLocation = location.pathname.split("/")[1];

    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const navbar = useRef(null);

    const [ scrolled, changeState ] = useState(false); 
    const [ navbarHeight, setNavbarHeight ] = useState(0);

    useEffect(() => {

        const onScroll = () => {
            if(document.documentElement.scrollTop > 50 && !scrolled) {
                changeState(true);
            } else if(document.documentElement.scrollTop <= 50 && scrolled) changeState(false)
        }

        window.addEventListener("scroll", onScroll);

        setNavbarHeight(navbar.current.getBoundingClientRect().height);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [scrolled])

    return (
        <React.Fragment>
            <div className={`duration-300 transition-all flex justify-between items-center z-20 fixed w-full nav ${scrolled ? 'scrolled bg-bg p-4': 'p-5'}`} ref={navbar}>
                <Link to="/" title={data.site.siteMetadata.title}>
                    <Logo className={`duration-300 transition-all ${scrolled ? 'w-6': 'w-8'}`}/>
                </Link>
                <List name="navbar" current={currentLocation}/>
                <div className="absolute line h-px left-0 bottom-0 bg-gradient-primary"></div>
            </div>
            {navPlaceholder && 
                <div style={{height: `${navbarHeight}px`}}></div>
            }
        </React.Fragment>
    )
}

export { List, Navbar }
