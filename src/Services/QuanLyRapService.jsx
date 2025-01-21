import { GROUP_ID } from "./constant";
import { adminHttp } from "./Interceptor/adminInterceptor";

export class QuanLyRapService {
    constructor() {
        
    }

    layDanhSachHeThongRap = () => {
        return adminHttp.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
    }
    layThongTinLichChieuPhim = (maPhim) => {
        return adminHttp.get(`/api/QuanLyRap/LayThongTinLichChieuPhim=${maPhim}`);
    }
    layThongTinHeThongRap = () => {
        return adminHttp.get(`/api/QuanLyRap/LayThongTinHeThongRap`)
    }
    layThongTinCumRap = (maHeThongRap) => {
        return adminHttp.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    }
} 
export const quanLyRapService = new QuanLyRapService();