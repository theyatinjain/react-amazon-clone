import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import RecommendedProduct from "./RecommendedProduct";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Microsoft/COOP/17_06_2020/V209073725_IN_PC_Microsoft_COOP_refreshing_Baneers_1500x200_2.jpg"
        alt="Advertisement Banner"
        className="checkout__ad"
      />
      <div className="checkout__area">
        <div className="checkout__left">
          <div>
            <h2 className="checkout__title">
              {`Hello ${
                user ? user?.email?.split("@")[0] : "Guest"
                }, Your Shopping Cart`}
            </h2>
            {cart.map((item) => (
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
          <div className="checkout__recommended">
            <h2 className="checkout__recommendedTitle">
              Additional items to consider
            </h2>
            <RecommendedProduct
              id={456}
              title={'Wall Speaker'}
              price={4998}
              image={'https://images-eu.ssl-images-amazon.com/images/I/51b%2B3ntEwkL._AC_UL100_SR100,100_.jpg'}
              rating={3}
            />
            <RecommendedProduct
              id={123}
              title={'Top Ceiling Speaker'}
              price={3890}
              image={'https://images-eu.ssl-images-amazon.com/images/I/51Lcdnt3ipL._AC_UL100_SR100,100_.jpg'}
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
