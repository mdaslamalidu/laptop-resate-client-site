import React from "react";
import AdvertiseItems from "../../AdvertiseItems/AdvertiseItems";
import Categories from "../../Categories/Categories";
import Services from "../../Services/Services";
import { Banner } from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <AdvertiseItems></AdvertiseItems>
      <Services></Services>
    </div>
  );
};

export default Home;
