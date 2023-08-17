import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../Api/api";
import { updateProduct } from "../../App/features/productsSlice";
import Spiner from "../../Components/Spiner";
import useFetch from "../../Hooks/useFetch";

const ProductEdit = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { id } = useParams()

    const { data: category } = useFetch(`${BASE_URL}/category`)
    const { data: product, error, loading } = useFetch(`${BASE_URL}/products/${id}`)

    const initialState = { id:'', isbn:'', title:'', cover:'', author:'', published:'', pages:'',status :'active', category : '' ,}

    const [ productData, setProductData ] = useState(initialState);
    const [ pages, setPage ] = useState('');

    useEffect(()=> {
      setProductData(prev => ({...prev, ...product}))
    }, [product])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProductData(prev => ({...prev, [name]: value}))
    };
    const handlePageChange = (e) => {
      setPage(e.target.value)
  }

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const page = Number(productData.page)
        const updateData = { ...productData, page};

        if (productData.page){
          dispatch(updateProduct({ id, updateData }))
          .unwrap(unwrapResult)
          .then( res => {
            if(res.status){
              setProductData(initialState);
              navigate(-1)
            }
          })
        } 
    }


 

  if (error) {
    return <div className="my-5 text-center h3">{error}</div>;
  }

  return (
    <>
      { product  && (
        <div className="container" style={{ maxWidth: "768px" }}>
          <form
            className="row g-3 my-5 shadow p-2 rounded"
            onSubmit={handleSubmit}
          >
            <div className="h4 text-center mb-3">Edit </div>
            <div className="col-12">
            <label htmlFor="title" className="form-label fw-bold">
                Title :
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={productData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="isbn" className="form-label fw-bold">
               ISBN :
            </label>
            <input
              type="text"
              className="form-control"
              id="isbn"
              name="isbn"
              value={productData.isbn}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="cover" className="form-label fw-bold">
               Cover :
            </label>
            <input
              type="text"
              className="form-control"
              id="cover"
              name="cover"
              value={productData.cover}
              onChange={handleChange}
              required
            />
          </div>

          
          <div className="col-md-6">
            <label htmlFor="brand" className="form-label fw-bold">
               Author :
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={productData.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="published" className="form-label fw-bold">
               Published :
            </label>
            <input
              type="text"
              className="form-control"
              id="published"
              name="published"
              value={productData.published}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="col-md-6">
            <label htmlFor="page" className="form-label fw-bold">
                Page :
            </label>
            <input
              type="number"
              className="form-control"
              id="page"
              name="page"
              value={pages}
              onChange={handlePageChange}
              required
            />
          </div>
          
          <div className="col-md-6">
            <label htmlFor="category" className="form-label fw-bold">
              Category :
            </label>
            <select
                className="form-select" 
                id="category"
                value={productData.category}
                name="category"
                onChange={handleChange}
                required
            >
                <option value="">-- Select Category --</option>
                { category && category.map(cat => {
                    const {category, id, status} = cat;
                    return status === "active" ? (
                        <option key={id} value={category}>{category}</option>
                    ) : null;
                })}
            </select>
          </div>
           
            <div className="col-12">
              <button type="submit" className="btn btn-primary mb-2 me-2">
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger mb-2 ms-2"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ProductEdit;
