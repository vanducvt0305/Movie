import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
import SimpleSlider from "../Component/SimpleSlider";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinLichChieuHeThongRapAction } from "../Redux/thongTinLichChieuHeThongRapReducer";
import { layThongTinCumRapAction } from "../Redux/thongTinCumRapReducer";
import { layDanhSachPhimAction } from "../Redux/danhSachPhimReducer";
import { format } from "date-fns";

const TrangChu = () => {
  const [listPhim, setListPhim] = useState([]);
  const [heThongRap, setHeThongRap] = useState([]);
  const { danhSachPhim } = useSelector((state) => state.danhSachPhimReducer);
  const dispatch = useDispatch();
  const thongTinLichChieuHeThongRap = useSelector(
    (state) =>
      state.thongTinLichChieuHeThongRapReducer.thongTinLichChieuHeThongRap
  );
  const thongTinCumRap = useSelector(
    (state) => state.thongTinCumRapReducer.thongTinCumRap
  );
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
        setListPhim(res.data.content);
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
        setHeThongRap(res.data.content);
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
        dispatch(layThongTinLichChieuHeThongRapAction(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
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
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 my-5">
          {listPhim?.map((item) => {
            return (
              <div
                key={item}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-[260px] object-cover"
                    src={item.hinhAnh}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.tenPhim}
                    </h5>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex border border-solid border-orange-600 h-screen overflow-hidden">
          <div className="w-[10%]">
            <div className="flex flex-col items-center">
              {heThongRap?.map((item, index) => {
                return (
                  <button
                    key={index}
                    className="my-5"
                    onClick={() => {
                      dispatch(
                        layThongTinCumRapAction(
                          thongTinLichChieuHeThongRap[index]
                        )
                      );
                    }}
                  >
                    <img src={item.logo} alt="" width={50} />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-[30%] ">
            {thongTinCumRap.lstCumRap?.map((item, index) => {
              return (
                <button
                  key={index}
                  className="text-start px-4 py-2 w-full"
                  onClick={() => {
                    dispatch(layDanhSachPhimAction(item.danhSachPhim));
                  }}
                >
                  <div className="text-green-700 text-sm">
                    {item.tenCumRap.toUpperCase()}
                  </div>
                  <div className="text-gray-400 text-xs mt-1 mb-2">
                    {item.diaChi.toUpperCase()}
                  </div>
                  <div className="text-red-500 text-xs my-2">{`[chi tiết]`}</div>
                  <hr className="w-[90%] mx-auto my-2" />
                </button>
              );
            })}
          </div>
          <div className="w-[60%] overflow-y-scroll">
            {danhSachPhim?.map((item, index) => {
              return (
                <div key={index} className="flex p-4">
                  <div className="w-[120px] h-[126px] pr-4">
                    <img src={item.hinhAnh} alt="" className="w-full h-full" />
                  </div>
                  <div className="w-full">
                    <div className="flex mb-4">
                      <div className="bg-red-500 text-white p-1 rounded-md mr-2">
                        {item.maPhim}
                      </div>
                      <p className="font-medium text-lg">{item.tenPhim}</p>
                    </div>
                    <div>
                      <div className="grid grid-cols-3 gap-4">
                        {item.lstLichChieuTheoPhim?.map((lichChieu, index) => {
                          return (
                            <a href="/">
                              <div
                                key={index}
                                className="border border-solid boder-[#9e9e9e] p-2 text-center align-middle bg-[#FAFAFA] rounded-md hover:text-lg transition-all duration-500 h-[40px] hover:h-[46px]"
                              >
                                {tachNgayGio(
                                  format(
                                    new Date(lichChieu.ngayChieuGioChieu),
                                    "dd-MM-yyyy~ HH:mm"
                                  )
                                )}
                              </div>
                            </a>
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
