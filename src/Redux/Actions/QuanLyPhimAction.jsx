import { useDispatch } from "react-redux";
import { quanLyPhimService } from "../../Services/quanLyPhimService";

import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "../Actions/type/QuanLyPhimType";

export const layDanhSachPhimAction = (tenPhim ='') => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim(tenPhim);
            // Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })
        } catch (error) {
            console.log('error: ', error)
        }
    }
}

export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {

            let result = await quanLyPhimService.themPhimUploadHinh(formData);
            alert('Thêm phim thành công!')
            console.log('result', result.data.content)
        }
        catch (error) {
            console.log(ErrorList.response?.data)
        }
    }
}

export const capNhatPhimUploadAction = () => {
    return async (dispatch) => {
        try {

            let result = await quanLyPhimService.capNhatPhimUpload(formData);
            alert('Cập nhật phim thành công!')
            console.log('result', result.data.content)
        }
        catch (error) {
            console.log(ErrorList.response?.data)
        }
    }
}

export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await quanLyPhimService.layThongTinPhim(maPhim);
            
            console.log("result: ", result);

            dispatch({
                type: SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content,
            });
        } catch (error) {
            // Sử dụng biến error thay vì ErrorList
            console.log(error.response?.data);
        }
    };
};

export const xoaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try{
            // Sử dụng tham số Tham số
            const result = await quanLyPhimService.xoaPhim(maPhim);
            console.log('result: ', result.data.content);
            alert('Xoá phim thành công !');

            // Sau khi xoá load lại danh sách phim mới
            dispatch(layDanhSachPhimAction());
        }
        catch (error){
            console.log('error: ', error.response?.data)
        }
    }
}