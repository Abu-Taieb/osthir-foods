import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch(console.error());
  }, []);

  return (
    <>
      {chefs.map(chef => (
        
          <div className="card w-full glass">
          <figure>
            <img
              src={chef.chef_picture}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold mx-auto mb-5">{chef.chef_name}</h2>
            <div className="flex justify-around gap-4 text-left mb-5">
              <div className="">
                <h5 className="font-bold">Years of Experience : </h5>
                <h5 className="font-bold">Number of Recipes : </h5>
                <h5 className="font-bold">Likes : </h5>
              </div>
              <div className="">
                <h5 className="font-bold">{chef.years_of_experience}</h5>
                <h5 className="font-bold">{chef.num_recipes}</h5>
                <h5 className="font-bold">{chef.likes}</h5>
              </div>
            </div>
            <div className="card-actions justify-end">
              <Link to={"/details"}>
                <button className="btn btn-primary">View Recipes</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Chef;
