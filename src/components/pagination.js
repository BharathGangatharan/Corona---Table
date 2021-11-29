import React from 'react'
import './pagination.css'


const Pagination = ({itemPerPage,totalItem,paginate}) => {

    const pageNumber = [];

    for(let i=1;i<=Math.ceil(totalItem/itemPerPage);i++){
        pageNumber.push(i)
    }

    return (
        <nav class="navbar">
            <ul className='pagination'>
                {
                    pageNumber.map(number =>(
                        <li key={number} className='page-item'>
                            <a onClick={() => paginate(number)} href="#" className='page-link'>
                                {number}
                            </a>

                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination;
