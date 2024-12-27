// ROUTE QUẢN TRỊ DÙNG CHUNG CHO PHIM VÀ NGƯỜI DÙNG: XUÂN
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { ACCESS_TOKEN } from "../../Services/constant";
import { useDispatch, useSelector } from "react-redux";
import { verifyAdminAction } from "../../Redux/Actions/adminAction";
import Page404 from "../Page404";

const QuanTri = () => {
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [openAlertLogout, setopenAlertLogout] = useState(false);
  const adminInfo = useSelector((state) => state.adminReducer.adminInfo);
  // Kiểm tra người dùng có quyền truy cập vào trang admin ko
  const dispatch = useDispatch();
  dispatch(verifyAdminAction());
  const isAdmin = useSelector((state) => state.adminReducer.isAdmin);
  console.log("isAdmin: ", isAdmin);
  if (!isAdmin) {
    return <Page404 />;
  }

  return (
    <>
      {/* BLOCK MAIN */}
      <div className="admin flex min-h-screen">
        {/* BLOCK DASHBOARD */}
        <div className="dashboard w-1/5 px-8 py-2 bg-custom-dark relative">
          <div className="admin-logo flex justify-start items-center gap-4 font-bold py-8">
            <img src="https://i.imgur.com/lC22izJ.png" alt="" width={50} />
            <h1 className="group-name text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-100">
              BC77 NHÓM 2
            </h1>
          </div>
          <div className="admin-menu">
            {/* users */}
            <NavLink
              to={"/quantri/nguoidung"}
              className={(props) =>
                props.isActive
                  ? "link-active block my-7 text-white "
                  : "link-noActive block my-7 text-white/60 hover:text-white/85"
              }
            >
              <i className="fa fa-user-cog"></i>
              <span className="ml-2">NGƯỜI DÙNG</span>
            </NavLink>
            {/* flims */}
            <NavLink
              to={"/quantri/phim"}
              className={(props) =>
                props.isActive
                  ? "link-active block my-7 text-white"
                  : "link-noActive block my-7 text-white/60 hover:text-white/85"
              }
            >
              <i className="fa fa-film"></i>
              <span className="ml-2">PHIM</span>
            </NavLink>
          </div>
          <div className="admin-back-home absolute bottom-0 w-full left-0 bg-slate-800 text-center text-white">
            <a
              href="/"
              className="hover:cursor-pointer p-5 flex justify-center items-center transition-all"
            >
              <i className="fa fa-long-arrow-alt-left"></i>
              <span className="ml-2">BACK TO HOME</span>
            </a>
          </div>
        </div>
        {/*  BLOCK OUTLET */}
        <div className="outlet w-4/5 bg-gray-100 pb-8">
          <div className="top-outlet bg-white text-right py-2 px-4 flex justify-between items-center">
            <h1 className="p-2 text-black/80">
              Quản trị viên
              <NavLink to={"/quantri/nguoidung"}>
                <span className="text-indigo-500 font-semibold ml-1">
                  {adminInfo.adminAccount}
                </span>
              </NavLink>
            </h1>
            <button
              className="btn-logOut text-red-600 hover:text-red-500 rounded-md hover:bg-gray-100 p-2"
              onClick={() => {
                setConfirmLogout(true);
              }}
            >
              Đăng xuất
            </button>
          </div>
          <div className="main-outlet bg-white m-3 rounded-sm">
            <Outlet />
          </div>
        </div>
      </div>
      {/* BLOCK MODAL */}
      {/* modal confirm logout */}
      <div className="modal-logout">
        <Modal
          show={confirmLogout}
          size="lg"
          onClose={() => setConfirmLogout(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="modal-logout-info text-center py-5">
              <FaRegCircleQuestion
                className={"alert-icon mx-auto mb-4 h-14 w-14 text-gray-300"}
              />
              <h3 className="title mb-5 text-xl font-normal text-gray-500 dark:text-gray-400">
                Bạn có muốn đăng xuất ?
              </h3>
              <div className="btn flex justify-center gap-4">
                <Button
                  color="blue"
                  onClick={() => {
                    localStorage.removeItem(ACCESS_TOKEN);
                    setopenAlertLogout(true);
                    setTimeout(() => {
                      window.location.href = "/";
                    }, 1000);
                  }}
                >
                  Đồng ý
                </Button>
                <Button color="warning" onClick={() => setConfirmLogout(false)}>
                  Hủy
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      {/* alert-logout */}
      <div className="alert-logout">
        <Modal show={openAlertLogout} size="lg" popup>
          <Modal.Header />
          <Modal.Body>
            <div className="alert-logout-info text-center py-5">
              <FaRegCheckCircle
                className={"alert-icon mx-auto mb-4 h-14 w-14 text-green-300"}
              />
              <h3 className="title mb-5 text-xl font-normal text-gray-500 dark:text-gray-400">
                Đăng xuất thành công! Bạn sẽ được chuyển hướng về trang chủ.
              </h3>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      {/* alert-role */}
      <div className="alert-role">
        <Modal show={false} size="lg" popup>
          <Modal.Header />
          <Modal.Body>
            <div className="alert-role-info text-center py-5">
              <HiOutlineExclamationCircle className="alert-icon mx-auto mb-4 h-14 w-14 text-red-300" />
              <h3 className="title mb-5 text-xl font-normal text-gray-500 dark:text-gray-400">
                Bạn không có quyền truy cập vào trang này !
              </h3>
              <div className="btn flex justify-center gap-4">
                <a href={"/"}>
                  <Button
                    color="failure"
                    onClick={() => {
                      //đóng popup
                    }}
                  >
                    Đồng ý
                  </Button>
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default QuanTri;
