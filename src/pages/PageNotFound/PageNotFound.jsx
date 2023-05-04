import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img className="rounded-xl" src={"https://drudesk.com/sites/default/files/styles/blog_page_header_1088x520/public/2018-02/404-error-page-not-found.jpg?itok=YW-iShwf"} alt="" />
            <p className="py-6">
              Please go to our Home
            </p>
            <Link to={'/'}><button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
