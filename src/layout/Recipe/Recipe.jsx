import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Recipe = () => {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipe")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  return (
    <>
      {recipes.map((recipe) => (
        <div className="card w-full glass">
          <figure>
            <img src={recipe.recipe_picture} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold mx-auto">{recipe.name}</h2>
            <h2 className=" font-bold mt-3">Ingredients</h2>
            <div className="">
              <p className="border-b">{recipe.ingredients[0]}</p>
              <p className="border-b">{recipe.ingredients[1]}</p>
              <p className="border-b">{recipe.ingredients[2]}</p>
              <p className="border-b">{recipe.ingredients[3]}</p>
              <p className="border-b">{recipe.ingredients[4]}</p>
              <p className="border-b">{recipe.ingredients[5]}</p>
            </div>
            <h2 className=" font-bold mt-3">Cooking Method</h2>
            <div className="">
              <p className="border-b">{recipe.directions[0]}</p>
              <p className="border-b">{recipe.directions[1]}</p>
              <p className="border-b">{recipe.directions[2]}</p>
              <p className="border-b">{recipe.directions[3]}</p>
              <p className="border-b">{recipe.directions[4]}</p>
              <p className="border-b">{recipe.directions[5]}</p>
            </div>
            <div className="flex justify-between mt-5">
              <Rating
            placeholderRating={recipe.rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
              <button className="btn btn-primary">Favorite</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Recipe;
