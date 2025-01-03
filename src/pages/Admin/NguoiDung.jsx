// PHẦN QUẢN TRỊ NGƯỜI DÙNG: XUÂN
import React, { useEffect, useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { NavLink } from "react-router-dom";
import { handleSelectedUserInfo } from "../../Redux/Reducer/adminReducer";
import { Button, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getArrayUsers } from "../../Redux/Actions/adminAction";
import { GROUP_ID } from "../../Services/constant";

const handleShowTotal = (total) => {
  return `Tổng cộng ${total} người dùng`;
};

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

  const [pagination, setPagination] = useState({
    total: arrayUsers.length,
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "50"],
    showTotal: (total) => handleShowTotal(total),
  });
  const [filteredInfo, setFilteredInfo] = useState({});
  const handleChange = (pagination, filters, sorter, extra) => {
    setFilteredInfo(filters);
    const newTotal = extra.currentDataSource.length;
    if (newTotal > 0) {
      pagination.total = newTotal;
      pagination.showTotal = () => handleShowTotal(newTotal);
    }
    setPagination(pagination);
  };

  const columns = [
    // index
    {
      title: "STT",
      key: "index",
      align: "center",
      witdh: "10%",
      className: "font-bold",
      render: (text, record, index) => {
        return !pagination.current || pagination.current === 1
          ? index + 1
          : (pagination.current - 1) * pagination.pageSize + (index + 1);
      },
    },
    // account
    {
      title: "TÀI KHOẢN",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      align: "center",
      witdh: "15%",
      fixed: "left",
    },
    // fullName
    {
      title: "HỌ TÊN",
      dataIndex: "hoTen",
      align: "center",
      witdh: "15%",
    },
    // email
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
      align: "center",
      witdh: "15%",
    },
    // TypeOf
    {
      title: "VAI TRÒ",
      dataIndex: "maLoaiNguoiDung",
      align: "center",
      witdh: "15%",
      render: (_, { maLoaiNguoiDung }) => {
        return (
          <Tag
            color={maLoaiNguoiDung === "QuanTri" ? "green" : "geekblue"}
            key={maLoaiNguoiDung}
          >
            {maLoaiNguoiDung === "QuanTri" ? "Quản Trị" : "Khách Hàng"}
          </Tag>
        );
      },
      filters: [
        {
          text: "Quản Trị",
          value: "QuanTri",
        },
        {
          text: "Khách Hàng",
          value: "KhachHang",
        },
      ],
      filteredValue: filteredInfo.maLoaiNguoiDung || null,
      onFilter: (value, record) =>
        record.maLoaiNguoiDung.toLowerCase() === value.toLowerCase(),
    },
    // phone
    {
      title: "SDT",
      dataIndex: "soDT",
      align: "center",
      witdh: "15%",
    },
    // edit
    {
      title: "THAO TÁC",
      dataIndex: "soDT",
      align: "center",
      witdh: "15%",
      fixed: "right",
      render: (value, record) => {
        return (
          <>
            <NavLink to={`/quantri/chinhsuanguoidung/${record.taiKhoan}`}>
              <button
                className="btn-edit-user"
                onClick={() => {
                  dispatch(handleSelectedUserInfo(record));
                }}
              >
                <EditOutlined />
                {/* Edit */}
              </button>
            </NavLink>
            <button
              className="btn-delete-user"
              onClick={() => {
                dispatch(deleteUser(record.taiKhoan));
              }}
            >
              | <DeleteOutlined />
            </button>
          </>
        );
      },
    },
  ];

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
        <Table
          columns={columns}
          dataSource={arrayUsers}
          onChange={handleChange}
          scroll={{ x: "max-content" }}
          bordered
          pagination={pagination}
        />
      </div>
    </div>
  );
};

export default NguoiDung;
