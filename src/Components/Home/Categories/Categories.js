import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
function Categories({ title, img, signIn }) {
  return (
    <>
      {signIn ? (
        <div className="sigIn__content">
          <div className="signIn">
            <h2>{title}</h2>
            <button className="signIn__button">Sign in securerly</button>
          </div>
          <div className="shopping__info">
            <img className="shopping__info__img" src={img} alt="" />
          </div>
        </div>
      ) : (
        <div className="categories">
          <h2 className="categories__title">{title}</h2>
          <Link to={`/products/${title}`}>
            <img className="categories__img" src={img} alt={title} />
          </Link>
          <span className="categories__link">Show more</span>
        </div>
      )}
    </>
  );
}

export default Categories;
