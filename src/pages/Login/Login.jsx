import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

  const [user, setUser] = useState(null)

  

  // Log in with google
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const logInUser = result.user;
      console.log(logInUser);
      setUser(logInUser)

    })
    .catch(error => {
      console.log(error.message);
    })
  };






  // Log in with email & password
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col my-3">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-2">Please Login now!</h1>
        </div>


        {
          user && <div className="">
            <h1>user: {user.displayName}</h1>
            <img src={user.photoURL} alt="" />
          </div>
        }


        
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="flex gap-2 justify-center">
              <Link>
                <button
                  className="flex items-center border rounded px-2"
                  onClick={handleGoogleSignIn}
                >
                  <span className="mr-2">Sign in</span>
                  <FaGoogle />
                </button>
              </Link>
              <Link>
                <button
                  className="flex items-center border rounded px-2"
                  onClick={handleGoogleSignIn}
                >
                  <span className="mr-2">Sign in</span>
                  <FaGithub />
                </button>
              </Link>
            </div>
          </form>
          <div className="ml-5 mb-4">
            <h6>
              New to Osthir Foods?
              <Link to={"/signup"}>
                <button className="btn btn-link no-underline">Register</button>
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
