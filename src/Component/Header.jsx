import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Drawer, Button, List, ListItem } from "@mui/material";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
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
          <li>
            <NavLink
              className="flex items-center px-2 py-3 group text-gray-500"
              to="dangnhap"
            >
              <svg
                class="h-8 w-8 stroke-gray-500 fill-gray-500  group-hover:stroke-orange-600 group-hover:fill-orange-600 transition-colors duration-300"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
              </svg>
              <div className="ml-2 group-hover:text-orange-600">Đăng nhập</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center px-2 py-3 group text-gray-500"
              to="dangky"
            >
              <svg
                class="h-8 w-8 stroke-gray-500 fill-gray-500  group-hover:stroke-orange-600 group-hover:fill-orange-600 transition-colors duration-300"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
              </svg>
              <div className="ml-2 group-hover:text-orange-600">Đăng ký</div>
            </NavLink>
          </li>
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
            <a className="flex items-center px-4 py-3 group" href="dangnhap">
              <svg
                class="h-8 w-8 group-hover:stroke-orange-600 group-hover:fill-orange-600 transition-colors duration-300"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
              </svg>
              <div className="ml-2 group-hover:text-orange-600">Đăng nhập</div>
            </a>
            <a className="flex items-center px-4 py-3 group" href="dangky">
              <svg
                class="h-8 w-8 group-hover:stroke-orange-600 group-hover:fill-orange-600 transition-colors duration-300"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
              </svg>
              <div className="ml-2 group-hover:text-orange-600">Đăng ký</div>
            </a>
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
  );
};

export default Header;
