import React from "react";
import "./Product.css";
import GradeIcon from "@mui/icons-material/Grade";
import { useStateValue } from "./StateProvider";
import { Description } from "@mui/icons-material";

function Product({ id, title, description, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      items: {
        id: id,
        title: title,
        description: description,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="mt-5  card p-2 h-auto align-items-center">
      <div className="product__info px-4 pt-4">
        <h3 class>{title}</h3>
        <p>{description}</p>

        <div className="d-flex mb-4 justify-content-around">
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating ">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <GradeIcon />
              ))}
          </div>
        </div>
      </div>

      <div className="my-3">
        <center>
          {" "}
          <img src={image} className="img-fluid" width="70%" alt="" />
        </center>
      </div>
      <button className="btn btn-warning my-3" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
