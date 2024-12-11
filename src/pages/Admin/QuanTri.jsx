// ROUTE QUẢN TRỊ DÙNG CHUNG CHO PHIM VÀ NGƯỜI DÙNG CỦA XUÂN

import { Button } from "flowbite-react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const QuanTri = () => {
  return (
    <div className="flex">
      {/* BLOCK DASHBOARD */}
      <div className="dashboard w-1/5 p-5 bg-custom-dark">
        <div className="logo flex justify-center items-center gap-4 font-bold py-8">
          <img src="https://i.imgur.com/lC22izJ.png" alt="" width={50} />
          <h1 className="text-xl first-line:text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-100">
            BC77 NHÓM 2
          </h1>
        </div>
        <NavLink
          to={"/QuanTri/NguoiDung"}
          className={(props) =>
            props.isActive
              ? "block my-7 text-white"
              : "block my-7 text-white/60 hover:text-white/85"
          }
        >
          NGƯỜI DÙNG
        </NavLink>
        <NavLink
          to={"/QuanTri/Phim"}
          className={(props) =>
            props.isActive
              ? "block my-7 text-white"
              : "block my-7 text-white/60 hover:text-white/85"
          }
        >
          PHIM
        </NavLink>
      </div>
      {/*  BLOCK OUTLET */}
      <div className="outlet w-4/5 bg-gray-100 pb-8">
        <div className="top-outlet bg-white text-right p-2">
          <button className="text-indigo-500 hover:text-indigo-600 rounded-md hover:bg-gray-100 p-2 ">
            Đăng xuất
          </button>
        </div>
        <div className="main-outlet bg-white m-3 rounded-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default QuanTri;
