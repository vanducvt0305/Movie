// PHẦN QUẢN TRỊ PHIM CỦA HOÀNG

import React, { Fragment, useEffect } from "react";
import { Button, Table } from 'antd';
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AudioOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimAction } from "../../Redux/Actions/QuanLyPhimAction";
const { Search } = Input;

const Phim = () => {
  const navigate = useNavigate(); // Khai báo useNavigate bên ngoài return


  const {arrFilm} = useSelector(state => state.QuanLyPhimReducer)
  
  const dispatch = useDispatch();
  console.log("arrFilmDefault", arrFilm)
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
      with: '25%',
      sortDirections: ['descend', 'ascend'],
      render: (text, film) => { return <Fragment>
          {film.moTa.length > 50 ? film.moTa.substr() + '...' : film.moTa}
        </Fragment>
      }
    },
    {
      title: 'Hành động',
      dataIndex: 'moTa',
      with: '25%',
      render: (text, film) => { return <Fragment>
          <NavLink className="bg-black text-white mr-2" to={`/quantri/editPhim/${film.maPhim}`}>
            <EditOutlined/>
          </NavLink>
          <NavLink className="bg-red-800 text-white mr-2 " to="/">
            <DeleteOutlined/>
          </NavLink>
        </Fragment>
      }
    },
  ];

  const data = arrFilm;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );
  const onSearch = (value, _e, info) => console.log(info?.source, value);
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
