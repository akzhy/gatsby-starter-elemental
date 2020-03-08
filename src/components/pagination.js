import React from "react";
import { Link } from "gatsby";
import { ChevronLeft, ChevronRight } from "./icons";
import "../style/pagination.less";

export default function({ pageContext, type }) {
    if (pageContext.numPages > 1) {
        let listItems = [];
        for (let i = 1; i <= pageContext.numPages; i++) {
            listItems.push(
                <li
                    className={i === pageContext.currentPage ? "active" : ""}
                    key={"PaginationItem" + i}
                >
                    <Link
                        to={"/" + type + "/" + (i === 1 ? "" : i)}
                        title={
                            type.charAt(0).toUpperCase() +
                            type.slice(1) +
                            " - Page " +
                            i
                        }
                        key={"PaginationItemA" + i}
                    >
                        {i}
                    </Link>
                </li>
            );
        }
        return (
            <div className="pagination">
                <ul>
                    {pageContext.currentPage !== 1 && (
                        <li>
                            <Link
                                to={
                                    "/" +
                                    type +
                                    "/" +
                                    (pageContext.currentPage - 1 === 1
                                        ? ""
                                        : pageContext.currentPage - 1)
                                }
                                title="Previous Page"
                            >
                                <span className="icon">
                                    <ChevronLeft />
                                </span>
                            </Link>
                        </li>
                    )}
                    {listItems}
                    {pageContext.currentPage !== pageContext.numPages && (
                        <li>
                            <Link
                                to={
                                    "/" +
                                    type +
                                    "/" +
                                    (pageContext.currentPage + 1)
                                }
                                title="Next Page"
                            >
                                <span className="icon">
                                    <ChevronRight />
                                </span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}
