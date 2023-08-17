import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import image from '../../Assets/profile.png'

const Profile = () => {
  const  { adminData } = useSelector(state => state.adminAuth)
  

  return (
    <>
      {adminData && (
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <div
                    className="mx-auto"
                    style={{ height: "150px", width: "150px" }}
                  >
                    <img
                      src={adminData.image ? adminData.image : image}
                      alt=""
                      className="rounded-circle img-fluid mh-100 mw-100"
                    />
                  </div>
                  <h5 className="my-3">{adminData.username}</h5>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  
                  <div className="row mb-2">
                    <div className="col-sm-3">
                      <p className="mb-0 fw-bold">User Id :</p>
                    </div>
                    <div className="col-sm-9">
                      <p className=" mb-0">{adminData.id}</p>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3">
                      <p className="mb-0 fw-bold">Name :</p>
                    </div>
                    <div className="col-sm-9">
                      <p className=" mb-0">{adminData.name}</p>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3">
                      <p className="mb-0 fw-bold">Email :</p>
                    </div>
                    <div className="col-sm-9">
                      <p className=" mb-0">{adminData.email}</p>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3">
                      <p className="mb-0 fw-bold">Secret key :</p>
                    </div>
                    <div className="col-sm-9">
                      <p className=" mb-0">{adminData.secretkey}</p>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3">
                      <p className="mb-0 fw-bold">Key :</p>
                    </div>
                    <div className="col-sm-9">
                      <p className=" mb-0">
                        {adminData.key}
                      </p>
                    </div>
                  </div>
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Profile