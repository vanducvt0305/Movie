import React, { useEffect, useState } from "react";
import SimpleSlider from "../Component/SimpleSlider";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import {
  layThongTinLstCumRapAction,
  layThongTinThuongHieuRapAction,
  renderNgayGioChieuPhimChiTietAction,
  renderThongTinCumRapAction,
} from "../Redux/Reducer/thongTinThuongHieuRapReducer";
import { NavLink } from "react-router-dom";

const TrangChu = () => {
  const [listPhim, setListPhim] = useState([]);
  const dispatch = useDispatch();
  const [thuongHieu, setThuongHieu] = useState(0);
  const [cumRap, setCumRap] = useState(0);
  const {
    thongTinThuongHieuRap,
    thongTinLstCumRap,
    thongTinCumRap,
    ngayGioChieuPhimChiTiet,
  } = useSelector((state) => state.thongTinThuongHieuRapReducer);
  const layDanhSachPhim = () => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NyIsIkhldEhhblN0cmluZyI6IjExLzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0OTYwMDAwMDAwMCIsIm5iZiI6MTcyMzIyMjgwMCwiZXhwIjoxNzQ5NzQ3NjAwfQ.waDB5mLZD-y9f0trHQhyWJiBNYXsC97HRlepmNYJKXE",
      },
    })
      .then((res) => {
        const newListFilm = res.data.content.filter((item, index) => {
          // console.log(item);
          return index < 8 && index % 2 === 0;
        });
        setListPhim(newListFilm);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const layThongTinHeThongRap = () => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NyIsIkhldEhhblN0cmluZyI6IjExLzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0OTYwMDAwMDAwMCIsIm5iZiI6MTcyMzIyMjgwMCwiZXhwIjoxNzQ5NzQ3NjAwfQ.waDB5mLZD-y9f0trHQhyWJiBNYXsC97HRlepmNYJKXE",
      },
    })
      .then((res) => {
        // console.log(res.data.content);
        dispatch(layThongTinThuongHieuRapAction(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const layThongTinLichChieuHeThongRap = () => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NyIsIkhldEhhblN0cmluZyI6IjExLzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0OTYwMDAwMDAwMCIsIm5iZiI6MTcyMzIyMjgwMCwiZXhwIjoxNzQ5NzQ3NjAwfQ.waDB5mLZD-y9f0trHQhyWJiBNYXsC97HRlepmNYJKXE",
      },
    })
      .then((res) => {
        dispatch(layThongTinLstCumRapAction(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const setThuongHieuRap = (index) => {
    setThuongHieu(index);
  };
  const setCumRapButton = (index) => {
    setCumRap(index);
  };
  const tachNgayGio = (ngayChieuGioChieu) => {
    const [datePart, timePart] = ngayChieuGioChieu.split("~");
    return (
      <div className="flex">
        <div className="text-green-500 mr-2">{datePart.trim()}</div>
        <span className="text-gray-400">~</span>
        <div className="text-red-500 ml-2">{timePart.trim()}</div>
      </div>
    );
  };

  useEffect(() => {
    layDanhSachPhim();
    layThongTinHeThongRap();
    layThongTinLichChieuHeThongRap();
  }, []);
  return (
    <div className="mt-16">
      <SimpleSlider />
      <div className="container mx-auto">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-3 gap-4 my-5 mx-auto justify-items-center">
          {listPhim?.map((item) => {
            return (
              <div
                key={item}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <NavLink to={`/chiTietPhim/${item.maPhim}`}>
                  <img
                    className="rounded-t-lg w-[350px] h-[400px] object-cover"
                    src={item.hinhAnh}
                    alt=""
                  />
                </NavLink>
                <div className="p-5">
                  <NavLink to={`/chiTietPhim/${item.maPhim}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.tenPhim}
                    </h5>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="flex border border-solid border-orange-600 h-screen overflow-hidden">
          <div className="w-[10%]">
            <div className="flex flex-col items-center">
              {thongTinThuongHieuRap?.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setThuongHieuRap(index);
                      dispatch(
                        renderThongTinCumRapAction(thongTinLstCumRap[index])
                      );
                    }}
                    className={`my-5 bg-white  ${
                      thuongHieu === index
                        ? `border-r-8 border-solid  border-red-500 transition-all duration-500 opacity-100`
                        : "opacity-25"
                    }`}
                  >
                    <img src={item.logo} alt="" width={50} className="mr-4" />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-[30%] overflow-y-scroll">
            {thongTinCumRap.lstCumRap?.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCumRapButton(index);
                    dispatch(
                      renderNgayGioChieuPhimChiTietAction(
                        thongTinCumRap.lstCumRap[index].danhSachPhim
                      )
                    );
                  }}
                  className={`text-start px-4 my-1 w-full ${
                    cumRap === index
                      ? `border-r-8 border-solid  border-red-500 transition-all duration-500 opacity-100 `
                      : "opacity-35"
                  }`}
                >
                  <div className="text-green-700 text-sm">
                    {item.tenCumRap.toUpperCase()}
                  </div>
                  <div className="text-gray-400 text-xs mt-1 mb-2">
                    {item.diaChi.toUpperCase()}
                  </div>
                  <div className="text-red-500 text-xs my-2">{`[chi tiết]`}</div>
                  <hr className="w-[90%] mx-auto " />
                </button>
              );
            })}
          </div>
          <div className="w-[60%] overflow-y-scroll">
            {ngayGioChieuPhimChiTiet?.map((item, index) => {
              return (
                <div key={index} className="flex p-4 flex-wrap md:flex-nowrap">
                  <div className="w-[120px] h-[126px] pr-4 mb-4 md:mb-0">
                    <img src={item.hinhAnh} alt="" className="w-full h-full" />
                  </div>
                  <div className="w-full">
                    <div className="flex mb-4">
                      <div>
                        <p className="bg-red-500 text-white p-1 rounded-md mr-2 h-[32px]">
                          {item.maPhim}
                        </p>
                      </div>
                      <p className="font-medium text-lg">{item.tenPhim}</p>
                    </div>
                    <div>
                      <div className="grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1 gap-4">
                        {item.lstLichChieuTheoPhim?.map((lichChieu, index) => {
                          return (
                            <NavLink
                              to={`/chitietphongve/${lichChieu.maLichChieu}`}
                            >
                              <div
                                key={index}
                                className="border border-solid boder-[#9e9e9e] p-2 text-center align-middle bg-[#FAFAFA] rounded-md hover:text-lg transition-all duration-500 h-[40px] hover:h-[46px] w-[200px]"
                              >
                                {tachNgayGio(
                                  format(
                                    new Date(lichChieu.ngayChieuGioChieu),
                                    "dd-MM-yyyy~ HH:mm"
                                  )
                                )}
                              </div>
                            </NavLink>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrangChu;
