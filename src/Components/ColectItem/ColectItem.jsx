import ColectDiv from "../ColectDiv/ColectDiv";
import ReactPaginate from "react-paginate";
import { React, useEffect, useState } from "react";
import "./ColectItem.css";
function ColectItem({ collection, del, backdrop, escape }) {
    const data = collection;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            <div className="containers">
                <ul className="list">
                    {currentItems.map((el) => (
                        <ColectDiv
                            key={el.id}
                            collection={el}
                            del={del}
                            backdrop={backdrop}
                            escape={escape}
                        />
                    ))}
                </ul>
                <ReactPaginate
                    breakLabel="....."
                    nextLabel=" >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageClassName="pagination_item"
                    previousClassName="pagination_item_tag"
                    nextClassName="pagination_item_next"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                    activeClassName="active_li"
                    breakClassName="free_dot"
                />
            </div>
        </>
    );
}

export default ColectItem;
