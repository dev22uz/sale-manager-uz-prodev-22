import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, updateProduct } from "../../../App/features/productsSlice";

const ProductsTable = ({ currentProducts }) => {
  const dispatch = useDispatch();

  const {adminData} = useSelector((state) => state.adminAuth);


  const handleStatus = ({ id, status }) => {
    if (status === "hidden") {
      const updateData = { status: "active" };
      dispatch(updateProduct({ id, updateData }));
    } else if (status === "active") {
      const updateData = { status: "hidden" };
      dispatch(updateProduct({ id, updateData }));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct({id}))
  }

  return (
    <>
      <div className="table-responsive">
        <table className="table align-items-center text-center ">
          <thead className="thead-light ">
            <tr>
              <th>Id</th>
              <th>Title</th>
              
              <th>Author</th>
              
              <th>Pages</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => {
              const { id,  title,  author,page  } = product;

              return (
                <tr key={id}>
                  <th>{id}</th>
                  <td>
                    <div
                     className="d-flex ms-4"
                    >
                     
                      <span className="fw-bold ms-1 text-start">{title}</span>
                    </div>
                  </td>
                  
                  <td>{author}</td>
                  <td>{page}</td>
                  
                  
                  <td>
                    <div className="d-flex flex-row justify-content-center">
                      <Link
                        className="btn btn-sm btn-primary me-1"
                        to={`/admin/books/${id}/edit`}
                      >
                        edit
                      </Link>
                      <Link
                      className="btn btn-sm btn-success ms-1"
                      to={`/admin/books/${id}`}
                      >
                        view
                      </Link>
                      <button
                         className="btn btn-sm btn-danger ms-1"
                         onClick={()=> handleDelete(id)}
                        >
                          delete
                        </button>
                      
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsTable;
