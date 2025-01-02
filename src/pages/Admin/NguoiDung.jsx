// PHẦN QUẢN TRỊ NGƯỜI DÙNG: XUÂN
import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Table } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getArrayUsers } from "../../Redux/Actions/adminAction";
import { GROUP_ID } from "../../Services/constant";
import { handleSelectedUserInfo } from "../../Redux/Reducer/adminReducer";

const NguoiDung = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArrayUsers(GROUP_ID));
  }, []);
  const arrayUsers = useSelector((state) => state.adminReducer.arrayUsers);
  const { Search } = Input;
  const onSearch = (value) => {
    dispatch(getArrayUsers(GROUP_ID, value));
  };

  const renderUser = () => {
    return arrayUsers.map((item, index) => {
      return (
        <Table.Row key={item.taiKhoan} className="user-info-row">
          <Table.Cell className="index">{index + 1}</Table.Cell>
          <Table.Cell>{item.taiKhoan}</Table.Cell>
          <Table.Cell>{item.hoTen}</Table.Cell>
          <Table.Cell>{item.email}</Table.Cell>
          <Table.Cell>
            {item.maLoaiNguoiDung === "QuanTri" ? "Quản Trị" : "Khách Hàng"}
          </Table.Cell>
          <Table.Cell>{item.soDT}</Table.Cell>
          <Table.Cell>
            <NavLink to={`/quantri/chinhsuanguoidung/${item.taiKhoan}`}>
              <button
                className="btn-edit-user"
                onClick={() => {
                  dispatch(handleSelectedUserInfo(item));
                }}
              >
                Edit
              </button>
            </NavLink>
            <button
              className="btn-delete-user"
              onClick={() => {
                dispatch(deleteUser(item.taiKhoan));
              }}
            >
              | Xoá
            </button>
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  return (
    <div className="admin-user">
      <h1 className="title">Quản lý người dùng</h1>
      {/* Block Add */}
      <NavLink to={"/quantri/chinhsuanguoidung"} className={"w-fit block"}>
        <Button className="btn-add-user" color="gray">
          Thêm người dùng
        </Button>
      </NavLink>
      {/* Block Search */}
      <Search
        className="search-user"
        placeholder="Nhập vào tài khoản hoặc tên người dùng"
        allowClear
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      {/* Block Table */}
      <div className="table-users">
        <Table className="text-center">
          <Table.Head>
            <Table.HeadCell>STT</Table.HeadCell>
            <Table.HeadCell>Tài khoản</Table.HeadCell>
            <Table.HeadCell>Họ Tên</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Vai trò</Table.HeadCell>
            <Table.HeadCell>SDT</Table.HeadCell>
            <Table.HeadCell>Thao tác</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">{renderUser()}</Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default NguoiDung;
