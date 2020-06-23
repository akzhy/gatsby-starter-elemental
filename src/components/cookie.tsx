import React from "react"
import { Link } from "gatsby";

interface Props {
    onChange: React.MouseEventHandler
}

const CookieBox = ({ onChange}: Props) => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-bgalt border-t-2 border-primary p-4 flex flex-wrap items-center justify-between z-50">
            <div className="flex">
                <p className="text-color-default mr-2">This website uses cookies to ensure you get the best experience on our website.</p>
                <Link to="/privacy-policy" className="text-color-2">Privacy policy</Link>
            </div>
            <button className="px-3 py-1 rounded bg-bgalt border-2 border-secondary text-color-default hover:border-primary duration-200 transition-all" onClick={onChange}>Accept</button>
        </div>
    )
}

export default CookieBox;
