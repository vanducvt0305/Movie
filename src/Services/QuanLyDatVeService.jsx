import { adminHttp } from "./Interceptor/adminInterceptor";

export class QuanLyDatVeService {
    constructor() {

    }
    taoLichChieu = (thongTinLichChieu) => {
        return adminHttp.post(`POST
/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu)
    }

}

export const quanLyDatVeService = new QuanLyDatVeService();