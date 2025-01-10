// PHẦN QUẢN TRỊ PHIM CỦA HOÀNG

import React, { Fragment, useEffect } from "react";
import { Button, Table } from 'antd';
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AudioOutlined, DeleteOutlined, EditOutlined, CalendarOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimAction, xoaPhimAction } from "../../Redux/Actions/QuanLyPhimAction";
const { Search } = Input;

const Phim = () => {
  const navigate = useNavigate(); // Khai báo useNavigate bên ngoài return


  const {arrFilmDefault} = useSelector(state => state.QuanLyPhimReducer)
  
  const dispatch = useDispatch();

  console.log("arrFilmDefault", arrFilmDefault)

  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, [dispatch]);

  const columns = [
    {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      sorter: (a, b) => a.maPhim - b.maPhim,
      with: '15%'
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'hinhAnh',
      render: (text, film, index) => { return <Fragment>
        <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} 
        onError={(e) => {e.target.onError = null; e.target.src = `http://picsum.photos/id/${index}/50/50`}}/>
      </Fragment>},
      with: "15%"
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if(tenPhimA > tenPhimB){
          return 1;
        }
        return -1;
      },
      with: '30%',
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      with: '20%',
      sortDirections: ['descend', 'ascend'],
      render: (text, film) => { return <Fragment>
          {film.moTa.length > 50 ? film.moTa.substr() + '...' : film.moTa}
        </Fragment>
      }
    },
    {
      title: 'Hành động',
      dataIndex: 'moTa',
      with: '30%',
      render: (text, film) => { return <Fragment>
          <NavLink className=" text-blue-500 hover:text-blue-800 mr-2" to={`/quantri/editPhim/${film.maPhim}`}>
            <EditOutlined/>
          </NavLink>
          <span style={{cursor:'pointer'}} className=" text-red-800 mr-2 " to="/" onClick={() => {
            // Gọi action xoá
            if(window.confirm('Bạn có chắc muốn xoá phim '+ film.tenPhim)){
              // Nếu đúng thì tiến hành gọi action tại đây
              dispatch(xoaPhimAction(film.maPhim));
            }
          }}>
            <DeleteOutlined/>
          </span>
          <NavLink className=" text-green-500 hover:text-green-800 mr-2" to={`/quantri/showtime/${film.maPhim}`}>
            <CalendarOutlined/>
          </NavLink>
        </Fragment>
      }
    },
  ];

  const data = arrFilmDefault;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );
  const onSearch = value =>{
    console.log(value);
    // gọi api lấy danh sách phim
    dispatch(layDanhSachPhimAction(value));
  };
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return <div className="container">

    <h3 className="text-4xl font-bold">Quản lý Phim</h3>

    <Button className="mt-5" onClick={() => {
      navigate('addnew');
    }}>Thêm Phim</Button>
    {/* Thanh tìm kiếm */}
    <Search className="my-5"
    placeholder="input search text" 

    onSearch={onSearch} 
    enterButton />
    <Table className="" columns={columns} dataSource={data} onChange={onChange} />
  </div>;
};

export default Phim;
