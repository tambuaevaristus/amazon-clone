import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="container-fluid">
      <Banner />
      <div className="home">
        <div className="container">
          {/* <img className="home__image" src="/assets/pexels-rahul-pandit-2769274.jpg" /> */}

          <div className="row">
            <div className="col-md-6">
              <Product
                id={1}
                title="Flat Screen TV"
                description="lorem20 the leng of the string i am of the string i am testing The learn startup"
                price={30.32}
                image="https://m.media-amazon.com/images/I/71HcZHyEsTL._SL1500_.jpg"
                rating={5}
              />
            </div>
            <div className="col-md-6">
              <Product
                id={2}
                title="Lenovo ThinkPad Pro"
                description="lorem20 is testing Ths actually the leng of the string i am s actually the leng of the string i am e learn startup"
                price={30.32}
                image="https://moneymanafrica.com/uploads/images/202205/img_1920x_6296585bf22617-40344139-88324265.jpg"
                rating={5}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <Product
                id={3}
                title="The Learn StartUp"
                description="lorem20 is actually the leng i am testing The learn startup"
                price={30.32}
                image="/assets/lean_startup.jpeg"
                rating={5}
              />
            </div>
            <div className="col-md-4">
              <Product
                id={4}
                title="BOOK pL"
                description="lorem20 is actually the leng of the string i am testing The learn startup"
                price={30.32}
                image="/assets/lean_startup.jpeg"
                rating={5}
              />
            </div>
            <div className="col-md-4">
              <Product
                id={5}
                title="Digital Watch"
                description="lorem20 is actually the leng of the string i am testing The learn startup"
                price={30.32}
                image="https://m.media-amazon.com/images/I/71TBSjoQflL._SL1500_.jpg"
                rating={5}
              />
            </div>
          </div>

          <div className="home__row">
            <Product
              id={6}
              title="Apple Mac Watch"
              description="lorem20 is actually the leng of the string i am testing The learn startup"
              price={30.32}
              image="https://m.media-amazon.com/images/I/61XPTRJZcCL._SL1500_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
