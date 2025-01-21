// ROUTE QUẢN TRỊ DÙNG CHUNG CHO PHIM VÀ NGƯỜI DÙNG: XUÂN
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
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
  if (!isAdmin) {
    return <Page404 />;
  }

  return (
    <>
      {/* BLOCK MAIN */}
      <div className="admin">
        {/* BLOCK DASHBOARD */}
        <div className="dashboard">
          <div className="admin-logo">
            <img src="https://i.imgur.com/lC22izJ.png" alt="" width={50} />
            <h1 className="group-name">BC77 NHÓM 2</h1>
          </div>
          <div className="admin-menu">
            {/* users */}
            <NavLink
              to={"/quantri/nguoidung"}
              className={(props) =>
                props.isActive ? "link-active" : "link-noActive"
              }
            >
              <i className="fa fa-user-cog"></i>
              <span className="ml-2">NGƯỜI DÙNG</span>
            </NavLink>
            {/* flims */}
            <NavLink
              to={"/quantri/phim"}
              className={(props) =>
                props.isActive ? "link-active" : "link-noActive"
              }
            >
              <i className="fa fa-film"></i>
              <span className="ml-2">PHIM</span>
            </NavLink>
          </div>
          <div className="admin-back-home">
            <a href="/">
              <i className="fa fa-long-arrow-alt-left"></i>
              <span className="ml-2">BACK TO HOME</span>
            </a>
          </div>
        </div>
        {/*  BLOCK OUTLET */}
        <div className="outlet">
          <div className="top-outlet">
            <div className="admin-info">
              Quản trị viên
              <span className="adminName">{adminInfo.adminAccount}</span>
              <div className="content">
                <p>
                  Họ tên:
                  <span>{adminInfo.adminName}</span>
                </p>
                <p>
                  Tài khoản:
                  <span>{adminInfo.adminAccount}</span>
                </p>
                <p>
                  SDT:
                  <span>
                    {adminInfo.adminPhone ? adminInfo.adminPhone : "..."}
                  </span>
                </p>
                <p>
                  Email:
                  <span>{adminInfo.adminEmail}</span>
                </p>
              </div>
            </div>
            <button
              className="btn-logOut"
              onClick={() => {
                setConfirmLogout(true);
              }}
            >
              Đăng xuất
            </button>
          </div>
          <div className="main-outlet">
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
            <div className="modal-logout-info">
              <FaRegCircleQuestion className="alert-icon text-gray-300" />
              <h3 className="title">Bạn có muốn đăng xuất ?</h3>
              <div className="btn">
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
            <div className="alert-logout-info">
              <FaRegCheckCircle className="alert-icon text-green-300" />
              <h3 className="title">
                Đăng xuất thành công! Bạn sẽ được chuyển hướng về trang chủ.
              </h3>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default QuanTri;
