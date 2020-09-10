import React from "react";
import Subtotal from './Subtotal';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Microsoft/COOP/17_06_2020/V209073725_IN_PC_Microsoft_COOP_refreshing_Baneers_1500x200_2.jpg"
          alt="Advertisement Banner"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {cart.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
