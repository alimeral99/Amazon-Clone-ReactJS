import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { useParams } from "react-router-dom";
import Product from "./Product/Product";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";

function ProductList() {
  const { title } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getData() {
      const ordersRef = collection(db, `products/${title}/items`);
      const ordersQuerySnapshot = await getDocs(ordersRef);

      setProduct(
        ordersQuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          items: doc.data(),
        }))
      );
    }
    getData();
  }, [title]);

  return (
    <div className="productList">
      {product.map((items) => (
        <Product items={items.items} key={items.id} id={items.id} />
      ))}
    </div>
  );
}

export default ProductList;
