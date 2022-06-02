import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="assets/amazon_banner.jpeg" />

        <div className="home__row">
          <Product
            title="The learn startup"
            price="30.32"
            image="/assets/lean_startup.jpeg"
            rating={5}
          />
          <Product
            title="The learn startup"
            price="30.32"
            image="/assets/lean_startup.jpeg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="The learn startup"
            price="30.32"
            image="/assets/lean_startup.jpeg"
            rating={5}
          />
          <Product
            title="The learn startup"
            price="30.32"
            image="/assets/lean_startup.jpeg"
            rating={5}
          />
          <Product
            title="The learn startup"
            price="30.32"
            image="/assets/lean_startup.jpeg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="The learn startup"
            price="30.32"
            image="/assets/lean_startup.jpeg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
