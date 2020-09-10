import React from 'react';
import './Product.css';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
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
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>&#8377; {price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><StarRateRoundedIcon /></p>
                    ))}
                </div>
            </div>
            <img src={image} alt="Book" />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
