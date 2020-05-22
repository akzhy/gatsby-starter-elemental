import React from "react"

const Row = ({ children }) => {
    return (
        <div className="row flex items-center justify-content my-3">
            {children}
        </div>
    )
}

const Col = ({ children }) => {
    return (
        <div className="flex-1 p-2">
            {children}
        </div>
    )
}

export { Row, Col }