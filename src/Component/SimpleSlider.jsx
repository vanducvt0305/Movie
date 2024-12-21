import React from "react";
import Slider from "react-slick";

function CustomPrevArrow({ className, onClick }) {
  return (
    <button
      type="button"
      className={`absolute z-50 top-1/2 left-4 -translate-y-1/2 bg-transparent  text-white rounded-full p-2  ${className}`}
      onClick={onClick}
    >
      ❮
    </button>
  );
}

// Arrow bên phải
function CustomNextArrow({ className, onClick }) {
  return (
    <button
      type="button"
      className={`absolute top-1/2 z-50 right-4 -translate-y-1/2 bg-transparent text-white  rounded-full p-2 mr-3  ${className}`}
      onClick={onClick}
    >
      ❯
    </button>
  );
}
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />, // Arrow phải
    prevArrow: <CustomPrevArrow />, // Arrow trái
  };
  return (
    // <Slider {...settings}>
    //   <div>
    //     <h3 className="w-full h-[600px] overflow-hidden flex items-center justify-center">
    //       <img
    //         src="https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
    //         alt=""
    //         className="w-full h-full object-cover"
    //       />
    //     </h3>
    //   </div>
    //   <div>
    //     <h3 className="w-full h-[600px] overflow-hidden flex items-center justify-center">
    //       <img
    //         src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png"
    //         alt=""
    //         className="w-full h-full object-cover"
    //       />
    //     </h3>
    //   </div>
    //   <div>
    //     <h3 className="w-full h-[600px] overflow-hidden flex items-center justify-center">
    //       <img
    //         src="https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png"
    //         alt=""
    //         className="w-full h-full object-cover"
    //       />
    //     </h3>
    //   </div>
    // </Slider>
    <div className="slider-container">
      <Slider {...settings}>
        <div className="w-full h-[600px] overflow-hidden flex items-center justify-center">
          <img
            src="https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[600px] overflow-hidden flex items-center justify-center">
          <img
            src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[600px] overflow-hidden flex items-center justify-center">
          <img
            src="https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}
