import React from "react";
import "./Home.css";
import Sliderimg from "./Sliderimg/Sliderimg";
import Categories from "./Categories/Categories";
function Home() {
  return (
    <div className="home">
      <Sliderimg />

      <div className="categories__container">
        <Categories
          title="Health & Personal Care"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
        />
        <Categories
          title="Electronics"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />
        <Categories
          title="Get fit at home"
          img="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
        />

        <Categories
          title="Sign in for the best experience"
          signIn
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
        />

        <Categories
          title="New arrivals in Toys"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
        />
        <Categories
          title="For your Fitness Needs"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
        />
        <Categories
          title="Kindle E readers"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg"
        />
        <Categories
          title="Shop Pet supplies"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
