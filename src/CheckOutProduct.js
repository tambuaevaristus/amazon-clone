import React from "react";
import "./CheckOutProduct.css";
import GradeIcon from "@mui/icons-material/Grade";
import { Button } from "@mui/material";
import { useStateValue } from "./StateProvider";

function CheckOutProduct({ id, image, title,description, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct border p-2">
      <div class="col-6 align-content-center">
      <img className="img-fluid" src={image} width="300px" height="20px" alt="" />

      </div>

      <div className="checkoutProduct__info col-6">
        
        <h2 className="checkoutProduct__title">{title}</h2>
        <p className="">{description}</p>
        <small>$</small>
        <strong>{price}</strong>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <GradeIcon />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from card</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
