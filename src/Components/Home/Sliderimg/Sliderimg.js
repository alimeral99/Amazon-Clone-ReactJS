import React, { useState } from "react";
import "./Sliderimg.css";
import Dataimg from "../Dataimg";
import NextIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import PrevIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
function Sliderimg() {
  const [index, setIndex] = useState(0);
  const { image } = Dataimg[index];

  const checkNumber = (number) => {
    if (number > Dataimg.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Dataimg.length - 1;
    }
    return number;
  };

  const nextImg = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className="slider__img">
      <img src={image} alt="" />

      <button className="prev__btn">
        <PrevIcon fontSize="large" onClick={prevPerson} />
      </button>

      <button className="next__btn">
        <NextIcon fontSize="large" onClick={nextImg} />
      </button>
    </div>
  );
}

export default Sliderimg;
