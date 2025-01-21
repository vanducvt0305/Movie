import { GROUP_ID } from "./constant";
import { adminHttp } from "./Interceptor/adminInterceptor";

export class QuanLyPhimService {
    layDanhSachPhim = (tenPhim='') =>{
        if(tenPhim != ''){
            return adminHttp.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`)
        }
        return adminHttp.get(`/api/QuanLyPhim/LayDanhSachPhim`)
    }

    themPhimUploadHinh = (formData) =>{
        return adminHttp.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
    }
    layThongTinPhim = (maPhim) => {
        return adminHttp.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
    capNhatPhimUpload = (formData) => {
        return adminHttp.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
    }
    xoaPhim = (maPhim) => {
        return adminHttp.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
    }
    
}




export const quanLyPhimService = new QuanLyPhimService();

