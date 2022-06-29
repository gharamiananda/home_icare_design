import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, handleSubmit } = useForm();
    let loginError;


    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(auth, data.email, data.password);
        console.log(user, error)

        navigate(from, { replace: true });

    }

    if (loading) {
        return <p>loading....</p>
    }


    return (
        <div className="wrapper">
            <div className="authentication-header" />
            <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                        <div className="col mx-auto">
                            <div className="mb-4 text-center">
                                <img src="assets/images/logo-img.png" width={180} alt />
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="p-4 rounded">
                                        <div className="text-center">
                                            <h3 className>Sign in</h3>
                                            {error}
                                        </div>

                                        <div className="login-separater text-center mb-4"> <span>OR SIGN IN WITH EMAIL</span>
                                            <hr />
                                        </div>
                                        <div className="form-body">



                                            <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                                                <div className="col-12">
                                                    <label htmlFor="email" className="form-label">Email Address</label>
                                                    <input type="email" className="form-control" id="email" placeholder="Email Address"  {...register("email")} />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="password" className="form-label">Enter Password</label>
                                                    <div className="input-group" id="show_hide_password">
                                                        <input type="password" className="form-control border-end-0" id="password" placeholder="Enter Password" {...register("password")} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember Me</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 text-end">	<a href="authentication-forgot-password.html">Forgot Password ?</a>
                                                </div>

                                                {loginError}
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button type="submit" className="btn btn-primary"><i className="bx bxs-lock-open" />Sign in</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end row*/}

                </div>
            </div>
        </div>

    );
};

export default Login;