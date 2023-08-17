import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL, postConfigure } from "../../Api/api";
import { login } from "../../App/features/customerAuthSlice";

const SignUp = () => {
    
    const dispatch = useDispatch()

    const { isLogedIn } = useSelector(state => state.customerAuth)

    const initialState = { id: '', name: '',email: '', secretkey: '',key: '',   }

    const [ profileData, setProfileData ] = useState(initialState)
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setProfileData(prev => ({...prev, [name]: value}))
    }

   
    
    const handleSubmit = (e) => {
        e.preventDefault()
        toast.dismiss()
        toast.info('Creating account...')
        
        fetch(`${BASE_URL}/users`)
        .then(res => res.json())
        .then(data => {
            const emailCheck = data.some(data => data.email === profileData.email)
            if (emailCheck){
                toast.dismiss();
                toast.error('A user already use this email')
            } else {
                fetch(`${BASE_URL}/users`, postConfigure(profileData))
                .then(res => res.json())
                .then(data => {
                    toast.dismiss()
                    toast.success('Account Created')

                    setProfileData(initialState)
                    dispatch(login(data))
                })
                .catch(error => {
                    toast.dismiss();
                    toast.error(error.message)
                })
            }
        })
        .catch(error => {
            toast.dismiss();
            toast.error(error.message)
        })
    }



    if (isLogedIn){
        return <Navigate to={'/'} />
    } else if (isLogedIn === false) {

        return (
          <div className="container" style={{maxWidth: "700px"}}>
            <form
               className="row g-2 my-4 shadow p-2 rounded"
               onSubmit={handleSubmit}
            >
              <div className="h4 text-center mb-2">Create Account</div>
              <div className="col-md-6">
                <label htmlFor="name" className="form-label fw-bold">
                  Name :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  required
                  />
              </div>
              
              <div className="col-md-6">
                <label htmlFor="email" className="form-label fw-bold">
                  Email :
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  required
                  />
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label fw-bold">
                Key :
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="key"
                  name="key"
                  value={profileData.key}
                  onChange={handleChange}
                  required
                  />
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label fw-bold">
                Secret key :
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="secretkey"
                  name="secretkey"
                  value={profileData.secretkey}
                  onChange={handleChange}
                  required
                  />
              </div>
              
              
              
              
              <button type="submit" className="btn btn-primary mb-2 me-2">
                  Submit
              </button>
              <div className="text-center mb-2">
                  <span>Already have a account? </span>
                  <span><Link to={'/admin/login'}> Log in</Link></span>
              </div>
            </form>
          </div>
        );
    }

};

export default SignUp;
