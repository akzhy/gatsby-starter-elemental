import React from "react";
import { Link } from "gatsby";
import { ChevronLeft, ChevronRight } from "./icons";
import "../style/pagination.less";

export default function({ pathContext, type }) {

    if (pathContext.numPages > 1) {
        let listItems = [];
        for (let i = 1; i <= pathContext.numPages; i++) {
            listItems.push(
                <li
                    className={i === pathContext.currentPage ? "active" : ""}
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
                    {pathContext.currentPage !== 1 && (
                        <li>
                            <Link
                                to={
                                    "/" +
                                    type +
                                    "/" +
                                    (pathContext.currentPage - 1 === 1
                                        ? ""
                                        : pathContext.currentPage - 1)
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
                    {pathContext.currentPage !== pathContext.numPages && (
                        <li>
                            <Link
                                to={
                                    "/" +
                                    type +
                                    "/" +
                                    (pathContext.currentPage + 1)
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
