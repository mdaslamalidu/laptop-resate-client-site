import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Categories.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
SwiperCore.use([EffectCoverflow, Pagination]);

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Axios.get("https://laptop-resale-server-site.vercel.app/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="border-y-2" id="category">
      <h2 className="text-2xl text-center font-bold py-12 ml-5 uppercase">
        Browser by Categories
      </h2>
      <div className="mb-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 6,
            slideShadows: true,
          }}
          // pagination={true}
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {categories.map((c) => (
              <SwiperSlide className="text-center shadow-lg rounded text-white">
                <img className="w-full p-4 rounded-lg" src={c.img} alt="" />
                <div className="flex justify-between p-4 items-center">
                  <h2 className="pb-4 font-bold text-xl uppercase">
                    {c.category_name} Laptop
                  </h2>
                  <Link
                    className="bg-[#0D9488] py-2 px-3 rounded"
                    to={`/category/${c.categoryId}`}
                  >
                    Show More...
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
