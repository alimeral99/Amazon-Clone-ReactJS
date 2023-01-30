import React from "react";
import "./CheckOutItem.css";
import { useDispatch } from "react-redux";
import { removeBasket } from "../../../store/slice/basketSlice";

function CheckOutItem({ items, id }) {
  const dispatch = useDispatch();

  const onRemoveBasket = () => {
    dispatch(removeBasket(id));
  };

  return (
    <div className="check__OutItem">
      <img className="check__image" src={items.image} alt={items.name} />
      <div className="check__outInfo">
        <h3 className="check__outHeader">{items.name}</h3>
        <div className="check__outButtons">
          <button onClick={onRemoveBasket}>Delete</button>
          <button>Save you later</button>
          <button>Comper with simillar items</button>
        </div>
      </div>
      <span className="check__outPrice"> {items.price}</span>
    </div>
  );
}

export default CheckOutItem;
