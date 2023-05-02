import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="lg:flex gap-4 border rounded-lg p-5">
        <div className="lg:w-2/3">
          <img
            className="rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1661778021952-65997d03b2b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="lg:w-1/3 my-5">
          <h2 className="card-title font-bold mx-auto mb-3">Chef Name</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quae quis nihil officiis perspiciatis eveniet
            deserunt porro voluptatem? Reiciendis nemo delectus voluptate
            repellendus error ex corporis adipisci, obcaecati expedita enim,
            quos aperiam voluptates sapiente veritatis temporibus modi aliquam
            rerum ratione repudiandae eum! Quisquam, iste consequuntur dolore
            deleniti atque vero tenetur?
          </p>
          <h5 className="font-bold my-2">Likes :</h5>
          <h5 className="font-bold my-2">Years of Experience :</h5>
        </div>
      </div>

      <h5 className="font-bold my-5 pt-5 text-2xl">Number of Recipes</h5>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 pt-5">
        <div className="card w-full glass">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold mx-auto">Recipe Name</h2>
            <h2 className="card-title font-bold mx-auto">
              Ingredients at least 5
            </h2>
            <h2 className="card-title font-bold mx-auto">Cooking Method</h2>
            <h2 className="card-title font-bold mx-auto">Rating</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Favorite</button>
            </div>
          </div>
        </div>
        <div className="card w-full glass">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold mx-auto">Recipe Name</h2>
            <h2 className="card-title font-bold mx-auto">
              Ingredients at least 5
            </h2>
            <h2 className="card-title font-bold mx-auto">Cooking Method</h2>
            <h2 className="card-title font-bold mx-auto">Rating</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Favorite</button>
            </div>
          </div>
        </div>
        <div className="card w-full glass">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold mx-auto">Recipe Name</h2>
            <h2 className="card-title font-bold mx-auto">
              Ingredients at least 5
            </h2>
            <h2 className="card-title font-bold mx-auto">Cooking Method</h2>
            <div className="flex justify-between">
              <h2 className="card-title font-bold">Rating</h2>
              <button className="btn btn-primary">Favorite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
