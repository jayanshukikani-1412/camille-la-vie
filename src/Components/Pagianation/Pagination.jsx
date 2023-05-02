import axios from 'axios'
import React, { useEffect, useState } from 'react'

import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import ReviewItem from '../ReviewSectionComponent/ReviewItem'

const Pagination = () => {
    // const [currentPage,setCurrentPage] = useState(1);
    // const [itemsPerPage, setItemPerPage] = useState(4);

    const [pageCount,setPageCount] = useState(0)

    const [items, setItems] = useState([])

    useEffect(() => {
        const getComment = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=4`);
            const data = response.data;
            const total = response.headers.get('x-total-count')
            setPageCount(Math.ceil(total/4))
            setItems(data);
        }

        getComment();
    }, [])


    const handlePageClick = async (data) => {
        console.log(data.selected + 1)
        let currentPage = data.selected + 1;
        const commentData = await fetchComment(currentPage)
        setItems(commentData)
    }

    const fetchComment = async (currentPage) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=4`)
        const data = await res.data;
        return data;
    }

    return (
        <PaginationStyleWrapper>
            <div className='review-wrapper'>
                {

                    items.map((item) => {
                        return (
                            <ReviewItem key={item.id} body={item.body} email={item.email} />
                        )
                    })

                }
            </div>


            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName='pagination_wrapper'
                pageClassName='page_wrapper_item'
                pageLinkClassName='page_wrapper_link'
                previousClassName='page_wrapper_item'
                previousLinkClassName='page_wrapper_link'
                nextClassName='page_wrapper_item'
                nextLinkClassName='page_wrapper_link'
                breakClassName='page_wrapper_item'
                breakLinkClassName='page_wrapper_item'
                activeClassName='active'
            />
        </PaginationStyleWrapper>
    )
}

const PaginationStyleWrapper = styled.section`
.pagination_wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 55px;
}
.page_wrapper_item{
    cursor: pointer;
    background-color: white;
    color: #000000;
    padding: 15px 0px;

}

.page_wrapper_link{
    padding: 0 18px;
}
.active{
    background-color: #000000;
    color: #ffffff;
}

.review-wrapper{
    display: flex;
    flex-direction: column;
    gap: 30px;
}




`;

export default Pagination
