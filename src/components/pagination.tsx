import React from "react"
import { Link } from "gatsby"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function({ pageContext, type }) {
    if (pageContext.numPages > 1) {
        const listItems = Array.from({length: pageContext.numPages }).map((_,p) => <Item type={type} currentPage={pageContext.currentPage} page={p+1} key={`p-b-i-${p}`}/>)
        

        return (
            <div className="pagination mt-8">
                <ul className="text-center">
                    {pageContext.currentPage !== 1 && (
                        <Item type={type} currentPage={pageContext.currentPage} page={pageContext.currentPage-1} icon={<ChevronLeft />} title="Previous Page"/>
                    )}
                    {listItems}
                    {pageContext.currentPage !== pageContext.numPages && (
                        <Item type={type} currentPage={pageContext.currentPage} page={pageContext.currentPage+1} icon={<ChevronRight />} title="Next Page"/>
                    )}
                </ul>
            </div>
        )
    } else {
        return <React.Fragment></React.Fragment>
    }
}

type ItemProps = { type: string, currentPage, title?: string, page: number, icon?: JSX.Element };
const Item: React.FC<ItemProps> = ({ type, currentPage, title, page, icon }) => {

    const to = `/${type}/${(page === 1 ? "" : page)}`;
    const active = icon ? false : (page === currentPage)

    const _title = title || `${type.charAt(0).toUpperCase()}${type.slice(1)} - Page ${page}`

    return (
        <li
            className={`inline-block align-middle`}
        >
            <Link
                to={to}
                title={_title}
                className={`rounded-full bg-bgalt flex items-center justify-center w-12 text-center h-12 m-3 transition-all duration-300 hover:shadow-2xl focus:shadow-2xl ${active ? "bg-gradient-primary text-white shadow-2xl" : ""}`}
            >
                <span>{icon || page}</span>
            </Link>
        </li>
    )
}
