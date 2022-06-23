import React from "react";
import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import Footer from "./Footer";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
    <div className="checkout container">
      <div className="checkout__left">
        <img className="checkout__ad" src="/assets/ads.jpeg" alt="" />

        <div>
          <h3>Hello {user?.email}</h3>

          <h2 className="checkout__title">Your Shoping Basket</h2>

          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
          <Footer />
</>
  );
}

export default Checkout;
