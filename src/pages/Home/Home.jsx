import React from "react";
import { Link } from "react-router-dom";
import Chef from "../../layout/Chef/Chef";

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Our vegetables World</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <h2 className="text-center font-bold text-5xl">Our Chefs</h2>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 my-10">
        <Chef></Chef>
      </div>
    </>
  );
};

export default Home;
