import React from "react";
import "./CheckOutProduct.css";
import GradeIcon from '@mui/icons-material/Grade';
import { Button } from "@mui/material";
import { useStateValue } from "./StateProvider";



function CheckOutProduct({ id, image, title, rating, price }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">{price}</p>
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
