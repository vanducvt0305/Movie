import { NavLink, useMatch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Drawer, Button, List, ListItem } from "@mui/material";
import { ACCESS_TOKEN } from "../Services/constant";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../Redux/Actions/loginAction";
import { IoIosLogOut } from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Modal } from "flowbite-react";

const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const userInfo = useSelector((state) => state.loginReducer.userInfo);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      setIsLogin(true);
      dispatch(getUserInfo());
    }
  }, []);
  const notShowHeader = useMatch("/quantri/*");
  if (notShowHeader) {
    return <></>;
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* BLOCK HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white h-16 z-50">
        <nav className="flex justify-between items-center mx-5 ">
          <NavLink className="cursor-pointer" to="trangchu">
            <img
              src="https://demo1.cybersoft.edu.vn/logo.png"
              width={200}
              alt=""
            />
          </NavLink>
          <ul className="xl:flex hidden gap-6 ">
            <li className="hover:text-orange-600 transition-all duration-300">
              <NavLink to="#">Lịch Chiếu</NavLink>
            </li>
            <li className="hover:text-orange-600 transition-all duration-300">
              <NavLink to="#">Cụm Rạp</NavLink>
            </li>
            <li className="hover:text-orange-600 transition-all duration-300">
              <NavLink to="#">Tin Tức</NavLink>
            </li>
            <li className="hover:text-orange-600 transition-all duration-300">
              <NavLink to="#">Ứng Dụng</NavLink>
            </li>
          </ul>
          <ul className="xl:flex hidden">
            {isLogin ? (
              <>
                <li>
                  <NavLink
                    className="flex items-center px-2 py-3 group text-gray-500"
                    to="#"
                  >
                    <div className="pr-4 border-r-2 border-gray-200">
                      Xin chào
                      <span className="ml-2 text-indigo-500 font-semibold">
                        {userInfo.taiKhoan}
                      </span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="flex items-center pl-2 py-3 group text-gray-500 "
                    to="#"
                    onClick={() => {
                      setConfirmLogout(true);
                    }}
                  >
                    <IoIosLogOut className="text-2xl group-hover:text-orange-600" />
                    <div className="ml-2 group-hover:text-orange-600">
                      Đăng Xuất
                    </div>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className="flex items-center px-2 py-3 group text-gray-500"
                    to="dangnhap"
                  >
                    <svg
                      className="h-8 w-8 stroke-gray-500 fill-gray-500  group-hover:stroke-orange-600 group-hover:fill-orange-600 transition-colors duration-300"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                    </svg>
                    <div className="ml-2 group-hover:text-orange-600">
                      Đăng nhập
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="flex items-center px-2 py-3 group text-gray-500"
                    to="dangky"
                  >
                    <svg
                      className="h-8 w-8 stroke-gray-500 fill-gray-500  group-hover:stroke-orange-600 group-hover:fill-orange-600 transition-colors duration-300"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                    </svg>
                    <div className="ml-2 group-hover:text-orange-600">
                      Đăng ký
                    </div>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="xl:hidden">
            <Button onClick={toggleDrawer} color="white">
              <i className="fa fa-bars text-2xl text-orange-600"></i>
            </Button>
          </div>
        </nav>

        <Drawer anchor="left" open={open} onClose={toggleDrawer}>
          <List className="w-[230px]">
            <div>
              {isLogin ? (
                <>
                  <li>
                    <NavLink
                      className="flex items-center px-2 py-3 group text-gray-500"
                      to="#"
                    >
                      <div className="px-4">
                        Xin chào
                        <span className="ml-2 text-indigo-500 font-semibold">
                          {userInfo.taiKhoan}
                        </span>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex items-center px-6 py-3 group text-gray-500 "
                      to="#"
                      onClick={() => {
                        localStorage.removeItem(ACCESS_TOKEN);
                        setIsLogin(false);
                      }}
                    >
                      <IoIosLogOut className="text-2xl group-hover:text-orange-600" />
                      <div className="ml-2 group-hover:text-orange-600">
                        Đăng Xuất
                      </div>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <a
                    className="flex items-center px-4 py-3 group"
                    href="dangnhap"
                  >
                    <svg
                      className="h-8 w-8 group-hover:stroke-orange-600 group-hover:fill-orange-600 transition-colors duration-300"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                    </svg>
                    <div className="ml-2 group-hover:text-orange-600">
                      Đăng nhập
                    </div>
                  </a>
                  <a
                    className="flex items-center px-4 py-3 group"
                    href="dangky"
                  >
                    <svg
                      className="h-8 w-8 group-hover:stroke-orange-600 group-hover:fill-orange-600 transition-colors duration-300"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                    </svg>
                    <div className="ml-2 group-hover:text-orange-600">
                      Đăng ký
                    </div>
                  </a>
                </>
              )}
            </div>
            <hr />
            <ListItem button>
              <a
                href="#"
                alt=""
                className="py-2 px-4 hover:text-orange-600 transition-all duration-300"
              >
                Lịch chiếu
              </a>
            </ListItem>
            <ListItem button>
              <a
                href="#"
                alt=""
                className="py-2 px-4 hover:text-orange-600 transition-all duration-300"
              >
                Cụm Rạp
              </a>
            </ListItem>
            <ListItem button>
              <a
                href="#"
                alt=""
                className="py-2 px-4 hover:text-orange-600 transition-all duration-300"
              >
                Tin Tức
              </a>
            </ListItem>
            <ListItem button>
              <a
                href="#"
                alt=""
                className="py-2 px-4 hover:text-orange-600 transition-all duration-300"
              >
                Ứng Dụng
              </a>
            </ListItem>
          </List>
        </Drawer>
      </header>
      {/* BLOCK MODAL */}
      <div className="modal-logout">
        <Modal />
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
                  variant="contained"
                  onClick={() => {
                    localStorage.removeItem(ACCESS_TOKEN);
                    setIsLogin(false);
                    setConfirmLogout(false);
                  }}
                >
                  Đồng ý
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setConfirmLogout(false)}
                >
                  Hủy
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Header;
