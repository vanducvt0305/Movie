import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinLichChieuPhimAction } from "../Redux/heThongRapChieuReducer";
import { layThongTinHeThongRapChieuAction } from "../Redux/heThongRapChieuReducer";
import { format } from "date-fns";
const ChiTietPhim = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { heThongRapChieu } = useSelector(
    (state) => state.heThongRapChieuReducer
  );
  const { thongTinLichChieuPhim } = useSelector(
    (state) => state.heThongRapChieuReducer
  );
  const layThongTinLichChieuPhim = () => {
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NyIsIkhldEhhblN0cmluZyI6IjExLzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0OTYwMDAwMDAwMCIsIm5iZiI6MTcyMzIyMjgwMCwiZXhwIjoxNzQ5NzQ3NjAwfQ.waDB5mLZD-y9f0trHQhyWJiBNYXsC97HRlepmNYJKXE",
      },
    })
      .then((res) => {
        console.log(res.data.content);
        dispatch(layThongTinLichChieuPhimAction(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };
  const layDanhSachPhongVe = () => {
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=47742`,
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NyIsIkhldEhhblN0cmluZyI6IjExLzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0OTYwMDAwMDAwMCIsIm5iZiI6MTcyMzIyMjgwMCwiZXhwIjoxNzQ5NzQ3NjAwfQ.waDB5mLZD-y9f0trHQhyWJiBNYXsC97HRlepmNYJKXE",
      },
    })
      .then((res) => {
        // console.log(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const tachNgayGio = (ngayChieuGioChieu) => {
    const [datePart, timePart] = ngayChieuGioChieu?.split("~");
    return (
      <div className="flex">
        <div className="text-green-500 mr-2">{datePart?.trim()}</div>
        <span className="text-gray-400">~</span>
        <div className="text-red-500 ml-2">{timePart?.trim()}</div>
      </div>
    );
  };
  useEffect(() => {
    layThongTinLichChieuPhim();
    layDanhSachPhongVe();
  }, []);
  return (
    <div>
      <div className="bg-[#111827]">
        <div className="container mx-auto mt-16">
          <div className="flex text-white pt-4">
            <NavLink to="/trangchu">TRANG CHỦ</NavLink>
            <span className="mx-2">|</span>
            <div>{thongTinLichChieuPhim.tenPhim?.toUpperCase()}</div>
          </div>
          <div className="flex py-4 text-white">
            <div className="w-2/10">
              <div className="bg-white w-[150px] sm:w-[300px] h-[220px] sm:h-[450px]">
                <img
                  src={thongTinLichChieuPhim.hinhAnh}
                  alt=""
                  className="w-[90%] mx-auto h-[220px] sm:h-[400px] object-cover py-3"
                />
              </div>
            </div>
            <div className="px-4 md:px-8 w-8/10">
              <div>{thongTinLichChieuPhim.tenPhim?.toUpperCase()}</div>
              <div>{thongTinLichChieuPhim.moTa}</div>
              <div>Mã phim: {id}</div>
              <div>
                Ngày khởi chiếu:
                {thongTinLichChieuPhim.ngayKhoiChieu}
              </div>
              <div>Đánh giá: {thongTinLichChieuPhim.danhGia}/10</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto mb-5">
          <div className="flex">
            <div className="w-5/12 md:w-3/12 pt-6 border-r-[1px] border-gray-300">
              {thongTinLichChieuPhim.heThongRapChieu?.map((item, index) => {
                return (
                  <div key={index} className="mx-auto my-5 ">
                    <button
                      className="flex items-center w-full"
                      onClick={() => {
                        dispatch(layThongTinHeThongRapChieuAction(item));
                      }}
                    >
                      <img src={item.logo} alt="" width={50} />
                      <div className="ml-2">
                        {item.tenHeThongRap.toUpperCase()}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="w-7/12 md:w-full p-3 md:p-8">
              {heThongRapChieu.cumRapChieu?.map((item, index) => {
                return (
                  <div key={item.index} className="my-5">
                    <div className="my-2 flex">
                      <img
                        src={item.hinhAnh}
                        alt=""
                        className="w-[50px] h-[50px]"
                      />
                      <div className="ml-2">
                        <div>{item.tenCumRap}</div>
                        <div className="text-xs">{item.diaChi}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
                      {item.lichChieuPhim?.map((item2, index2) => {
                        return (
                          <NavLink
                            key={index2}
                            to={`/chitietphongve/${item2.maLichChieu}`}
                          >
                            <div className="border border-solid boder-[#9e9e9e]  p-2 text-center align-middle bg-[#FAFAFA] rounded-md hover:text-lg transition-all duration-500 h-[40px] hover:h-[46px] w-[200px]">
                              {tachNgayGio(
                                format(
                                  new Date(item2.ngayChieuGioChieu),
                                  "dd-MM-yyyy~ HH:mm"
                                )
                              )}
                            </div>
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietPhim;
