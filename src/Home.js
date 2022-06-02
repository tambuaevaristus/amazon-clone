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
            title="lorem20 is actually the leng s actually the leng of the string i am s actually the leng of the string i am of the string i am testing The learn startup"
            price="30.32"
            image="/assets/lean_startup.jpeg"
            rating={5}
          />
          <Product
            title="lorem20 is actually the leng of the string i am testing Ths actually the leng of the string i am s actually the leng of the string i am e learn startup"
            price="30.32"
            image="/assets/lean_startup.jpeg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="lorem20 is actually the leng of the string i am s actually the leng of the string i am testing The learn startup"
            price="30.32"
            image="/assets/lean_startup.jpeg"
            rating={5}
          />
          <Product
            title="lorem20 is actually the leng of s actually the leng of the string i am the string i am testing The learn startup"
            price="30.32"
            image="/assets/lean_startup.jpeg"
            rating={5}
          />
          <Product
            title="lorem20 is actually the leng of the string i am testing The learn startup"
            price="30.32"
            image="/assets/lean_startup.jpeg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="lorem20 is actually the leng of the string i am testing The learn startup"
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
