import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addBasket } from "../../../store/slice/basketSlice";
function Product({ items, id }) {
  const dispatch = useDispatch();

  const onAddBasket = () => {
    dispatch(
      addBasket({
        name: items.name,
        price: items.price,
        image: items.image,
        id: id,
      })
    );
  };

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <div className="product">
      <div className="product__imageContainer">
        <img className="product__image" src={items.image} alt={items.name} />
      </div>
      <div className="product__info">
        <h3 className="product__title"> {truncate(items.name, 70)}</h3>
        <div className="product__priceContainer">
          <span>$</span>
          <h3 className="product__price"> {items.price}</h3>
        </div>
      </div>
      <div className="product__rating">
        {Array(items.rating)
          .fill()
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
      </div>
      <button onClick={onAddBasket} className="add__productBtn">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
