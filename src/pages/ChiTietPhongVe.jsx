import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layThongTinPhimVaDanhSachGheAction } from "../Redux/datVeReducer";

const ChiTietPhongVe = () => {
  const dispatch = useDispatch();
  const { danhSachGhe, thongTinPhim } = useSelector(
    (state) => state.datVeReducer
  );
  const { maLichChieu } = useParams();
  const layDanhSachPhongVe = () => {
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NyIsIkhldEhhblN0cmluZyI6IjExLzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0OTYwMDAwMDAwMCIsIm5iZiI6MTcyMzIyMjgwMCwiZXhwIjoxNzQ5NzQ3NjAwfQ.waDB5mLZD-y9f0trHQhyWJiBNYXsC97HRlepmNYJKXE",
      },
    })
      .then((res) => {
        console.log(res.data.content);
        dispatch(layThongTinPhimVaDanhSachGheAction(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    layDanhSachPhongVe();
  }, []);
  return (
    <div className="mt-20 ">
      <div className="flex">
        {/* <div className="xl:w-1/12 w-0"></div> */}
        <div className="flex container mx-auto justify-between xl:w-11/12 w-full flex-wrap">
          <div className="xl:w-8/12 w-full">
            <div className="text-3xl text-center mb-6">Đặt Ghế Xem Phim</div>
            <div className="grid grid-cols-[repeat(6,_1fr)] sm:grid-cols-[repeat(8,_1fr)] md:grid-cols-[repeat(10,_1fr)] lg:grid-cols-[repeat(12,_1fr)]  xl:grid-cols-[repeat(15,_1fr)] gap-4 mb-4">
              {danhSachGhe?.map((item, index) => {
                return (
                  <div key={index}>
                    <button
                      className={`w-[40px] h-[40px] rounded-md ${
                        item.daDat
                          ? "bg-[#767676] cursor-not-allowed "
                          : item.loaiGhe === "Thuong"
                          ? "bg-[#E9E9E9]"
                          : "bg-[#FFA500]"
                      } ${
                        item.daDat ? "hover:bg-[#767676]" : "hover:bg-[#F5F5F5]"
                      } transition-all duration-500`}
                    >
                      {item.daDat ? "X" : item.stt}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="xl:w-4/12 w-full pl-5">
            <div className="text-3xl text-center mb-6">Thông Tin Đặt Vé</div>
            <div className="border border-solid border-black p-4 rounded-lg">
              <div className="text-xl text-orange-500">
                {thongTinPhim.tenPhim}
              </div>
              <div className="text-xl">Địa chỉ: {thongTinPhim.diaChi}</div>
              <div className="text-xl">Giờ chiếu: {thongTinPhim.gioChieu}</div>
              <div className="text-xl">
                Ngày chiếu: {thongTinPhim.ngayChieu}
              </div>
              <div className="text-xl">Cụm rạp: {thongTinPhim.tenCumRap}</div>
              <div className="text-xl">Tên rạp: {thongTinPhim.tenRap}</div>
            </div>
            <div className="container mx-auto my-5">
              <div className="flex justify-between text-xl">
                <div>
                  <div className="flex items-center">
                    <div className="w-[40px] h-[40px] bg-[#E9E9E9] rounded-md mr-1"></div>
                    <div>Ghế Thường</div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-[40px] h-[40px] bg-[#FFA500] rounded-md mr-1"></div>
                    <div>Ghế Vip</div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-[40px] h-[40px] bg-[#767676] rounded-md mr-1"></div>
                    <div>Ghế Đã Đặt</div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-[40px] h-[40px] bg-[#49DE80] rounded-md mr-1"></div>
                    <div>Ghế Đang Đặt</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-200 rounded-md overflow-hidden">
                <thead>
                  <tr className="bg-[#FFA500]">
                    <th className="px-4 py-2">Số Ghế</th>
                    <th className="px-4 py-2">Giá</th>
                    <th className="px-4 py-2">Hành Động</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietPhongVe;
