import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import CheckOutList from "./Components/CheckOutList/CheckOutList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./store/slice/basketSlice";

function App() {
  const basketItem = useSelector((state) => state.basket.basketItem);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [basketItem, dispatch]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:title" element={<ProductList />} />
          <Route path="/checkOut" element={<CheckOutList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
