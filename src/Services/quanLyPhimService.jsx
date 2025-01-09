import { baseService } from "./baseService";
import { GROUP_ID } from "./constant";
export class QuanLyPhimService extends baseService{
    constructor(){
        super();
    }
    layDanhSachPhim = () =>{
        // return this.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02")
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    }

    themPhimUploadHinh = (formData) =>{
        return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
    }
    layThongTinPhim = (maPhim) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
}

export const quanLyPhimService = new QuanLyPhimService();

