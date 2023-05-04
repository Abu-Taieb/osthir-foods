import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Navbar from "../Share/Navbar/Navbar";

const Login = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Log in with google
  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const logInUser = result.user;
        setUser(logInUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // Log in with github
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubAuthProvider)
      .then((result) => {
        const gitLoginUser = result.user;
        setUser(gitLoginUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // Log in with email & password
  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedEPUser = result.user;
        console.log(loggedEPUser);
        setUser(loggedEPUser);
        setError("");
        event.target.reset();
        setSuccess("User Create Successful");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="container mx-auto hero-content flex-col my-3">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-2">Please Login now!</h1>
          </div>

          {user && (
            <div className="text-center">
              <p className="font-semibold">User Name</p>
              <p className="font-bold">{user.displayName}</p>
              <a
                href=""
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img className="rounded-full w-16" src={user.photoURL} alt="" />
              </a>
            </div>
          )}

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
              </div>
              <div className="form-control mt-6">
                <p className="text-red-600 text-sm">{error}</p>
                <p className="text-green-600 text-sm">{success}</p>
                <button className="btn btn-primary">Login</button>
              </div>
              <div className=""></div>
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
                    onClick={handleGithubSignIn}
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
                  <button className="btn btn-link no-underline">
                    Register
                  </button>
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
