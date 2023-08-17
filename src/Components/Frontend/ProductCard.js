import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const ProductCard = ({product}) => {
    const { id, category, author,title, page, cover} = product;

    const dispatch = useDispatch()

    
    
   

    return (
    <div className="card mw-100 mb-2 border-0 shadow " >
        <div className='p-1 pt-2 d-flex mw-100 mb-2' style={{height: "200px"}} >
            <img src={cover} className="mx-auto mw-100 mh-100" alt="" />
        </div>
        <div className="card-body">
        <h6 className="card-title">Author: {author.length < 21 ? author : `${author.slice(0,20)}. . .`}</h6>
        <h6 className="card-title">Title: {title.length < 21 ? title : `${title.slice(0,20)}. . .`}</h6>
            <p className="card-text mb-1">Page: {page}</p>
            <div className='d-flex justify-content-between align-items-center'>
                <Link to={`/books/${category}/${id}`}>view details</Link>
                
            </div>
        </div>
    </div>
  )
}

export default ProductCard