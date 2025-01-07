import { quanLyPhimService } from "../../Services/quanLyPhimService";

import { SET_DANH_SACH_PHIM } from "../Actions/type/QuanLyPhimType";

export const layDanhSachPhimAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim();
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

