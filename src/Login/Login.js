import React from 'react'
import Home from '../Home/Home'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';


const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
       console.log(loginData)
    };
   

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login', loginData)
            .then(response => {
                console.log(response.data);
                navigate('/')   
            })
            .catch(error => {
                console.error(error.response.data);
            });
            
    };
    return (
       
        <section className="vh-100">
             <Home />
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit} className="cursor-pointer">
                            <div className="form-outline mb-4">
                                <input type="email" name='email' id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" onChange={handleChange}/>
                                <label className="form-label" for="form3Example3">Email address</label>
                            </div>


                            <div className="form-outline mb-3">
                                <input type="password" name='password' id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" onChange={handleChange}/>
                                <label className="form-label" for="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                               
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" 
                                    type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg ps-2 pe-2"
                                    >Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
                                <Link to='/register'
                                    className="link-danger">Register</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div
                className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>


                <div>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#!" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Login