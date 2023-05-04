import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Recipe from "../../layout/Recipe/Recipe";

const Details = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch(console.error());
  }, []);

  return (
    <>
      {chefs.map((chef) => (
        <div className="container mx-auto px-4 py-10">
          <div className="lg:flex gap-4 border rounded-lg p-5">
            <div className="lg:w-2/3">
              <img
                className="rounded-lg"
                src={chef.chef_picture}
                alt=""
              />
            </div>
            <div className="lg:w-1/3 my-5">
              <h2 className="card-title font-bold mx-auto mb-3">{chef.chef_name}</h2>
              <p className="mb-5">
                {chef.description}
              </p>
              <h5 className="font-bold my-2">Likes :{chef.likes}</h5>
              <h5 className="font-bold my-2">Years of Experience :{chef.years_of_experience}</h5>
            </div>
          </div>
          <h5 className="font-bold my-5 pt-5 text-2xl">Number of Recipes : {chef.num_recipes}</h5>
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7 pt-5">
            <Recipe></Recipe>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;
