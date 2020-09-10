import React from "react";
import "./RecommendedProduct.css";
import { useStateValue } from "./StateProvider";

function RecommendedProduct({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        //dispatch the item into data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
  return (
    <div className="recommendedProduct">
      <img src={image} alt={title} />
      <div className="recommendedProduct__info">
        <p className="recommendedProduct__title">{title}</p>
        <p className="recommendedProduct__price">
          {`₹ ${price}`}
        </p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default RecommendedProduct;
