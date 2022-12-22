import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import CategoryModal from "../CategoryModal/CategoryModal";
import Loading from "../shared/Spinner/Loading";
import SignleCategory from "./SignleCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Category.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const { id } = useParams();

  const handleModalData = (id) => {
    const findData = category.find((c) => c._id === id);
    setFilteredData(findData);
  };

  const handleReportItem = (id) => {
    const reportedItem = category.find((c) => c._id === id);

    const item = {
      reportId: reportedItem._id,
      img: reportedItem.img,
      selling_price: reportedItem.selling_price,
      originial_price: reportedItem.originial_price,
      email: reportedItem.email,
      name: reportedItem.sellerName,
    };

    fetch("https://laptop-resale-server-site.vercel.app/report", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("item report successfully");
          console.log(data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`https://laptop-resale-server-site.vercel.app/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategory(data);
      });
  }, [id]);

  return category.length === 0 ? (
    <Loading></Loading>
  ) : (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-8"
      >
        <div>
          {category.map((singleCategory) => (
            <SwiperSlide>
              <SignleCategory
                key={singleCategory._id}
                singleCategory={singleCategory}
                handleModalData={handleModalData}
                handleReportItem={handleReportItem}
              ></SignleCategory>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div>
        {filteredData && (
          <CategoryModal
            filteredData={filteredData}
            setFilteredData={setFilteredData}
          ></CategoryModal>
        )}
      </div>
    </div>
  );
};

export default Category;
