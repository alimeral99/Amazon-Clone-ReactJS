import React from "react";
import "./CheckOutList.css";
import CheckOutItem from "./CheckOutItem/CheckOutItem";
import { useSelector } from "react-redux";

function CheckOutList() {
  const { basketItem, total, amount } = useSelector((state) => state.basket);

  return (
    <div
      className={`empty__outList ${basketItem.length > 1 && "check__outList"}`}
    >
      <div className="check__list">
        <div className="check__listHeader">
          <h3 className="header__left">Shopping Cart</h3>

          <h3 className="header__right">Price</h3>
        </div>

        {basketItem.map((items) => (
          <CheckOutItem items={items} key={items.id} id={items.id} />
        ))}
      </div>

      <div className="sub__total">
        <h4>
          Subtotal <span>({amount} items)</span>
          <span className="total">{total.toFixed(2)}</span>
        </h4>

        <button className="total__btn">Prooceed to checkout</button>
      </div>
    </div>
  );
}

export default CheckOutList;
