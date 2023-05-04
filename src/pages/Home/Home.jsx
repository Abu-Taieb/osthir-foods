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
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to Our vegetables World
            </h1>
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

      <div className="container mx-auto mt-10 pt-10">
        <h2 className="text-center font-bold text-3xl">Our Special Recipes</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://media.istockphoto.com/id/480379752/photo/cook-decorating-a-plate.jpg?s=612x612&w=0&k=20&c=hPxt_XDChTVm219Twis4LWVX6zmw_191A6IVsjxLJdM="
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold">Cakes</h2>
              <p className="text-left">
                Cakes come in many different flavors and styles, including
                chocolate cake, vanilla cake, red velvet cake, carrot cake,
                cheesecake, sponge cake, and many more. They are often served on
                special occasions like birthdays, weddings, anniversaries, and
                holidays, and can be enjoyed as a dessert or a sweet treat
                anytime.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1541491008689-b5d3c6615e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold">Fruits</h2>
              <p className="text-left">
                Fruits are edible, sweet and fleshy parts of plants that contain
                seeds. They are usually eaten raw as a healthy snack or used as
                an ingredient in cooking, baking, or making drinks. Fruits come
                in a wide variety of colors, shapes, sizes, and flavors, and are
                packed with essential vitamins, minerals, and dietary fiber that
                are important for maintaining a healthy diet.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1632776350300-11016768b521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=931&q=80"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold">Vegetable</h2>
              <p className="text-left">
                A vegetable is an edible part of a plant that is usually
                consumed in savory dishes as a side dish or main course.
                Vegetables are an important part of a healthy diet as they are
                low in calories, fat, and sugar, and high in fiber, vitamins,
                and minerals.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 pt-10 px-5 mb-10">
        <div className="mb-10">
          <h2 className="text-center font-bold text-3xl mb-3">About Foods</h2>
          <p className="text-center">Overall quality of life a balanced of diet</p>
        </div>
        <div className="hero">
          <div className="grid md:grid-cols-2 gap-5 items-center">
            <img
              src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80"
              className="rounded-lg "
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold">
                What is Foods & what type of Foods
              </h1>
              <p className="py-2">
                Foods are edible substances that are consumed to provide the
                body with energy, nutrients, and sustenance. They come in
                various forms and can be obtained from plants, animals, or
                synthetic sources.
              </p>
              <p className="py-2">
                Foods are classified based on their nutritional content,
                composition, and physical properties. Some common categories of
                foods include fruits, vegetables, grains, meats, dairy products,
                and processed foods.
              </p>
              <p className="py-2">
                Foods provide the body with essential macronutrients such as
                carbohydrates as well as micronutrients such as vitamins and
                minerals. The type and quantity of food that a person consumes
                can have a significant impact on their health, wellbeing, and
                overall quality of life.
              </p>
              <p className="py-2">
                A balanced diet that includes a variety of foods from different
                food groups is essential for maintaining good health and
                preventing chronic diseases such as obesity, diabetes, and heart
                disease.
              </p>
              <p className="py-2">
                In addition to providing essential nutrients, food can also play
                a cultural and social role in many societies. It can be used as
                a way to celebrate holidays, bring people together, and express
                cultural identity.
              </p>
              <button className="btn btn-primary mt-10">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
