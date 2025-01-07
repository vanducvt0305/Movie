import React, { useState } from "react";
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Switch,
    TreeSelect,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from 'react-redux';
import { themPhimUploadHinhAction } from "../../Redux/Actions/QuanLyPhimAction";
import { GROUP_ID } from "../../Services/constant";
export const Edit = () => {
    const [componentSize, setComponentSize] = useState("default");
    const [imgSrc, setImgSrc] = useState('');
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            tenPhim: "",
            trailer: "",
            moTa: "",
            ngayKhoiChieu: "",
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {}
        },
        onSubmit: (values) =>{
            console.log("values", values);
            values.maNhom = GROUP_ID;
            //Tao đối tượng formData
            let formData = new FormData();
            for (let key in values) {
                if(key !== 'hinhAnh'){
                    formData.appeend(key, values[key]);
                }
                else {
                    formData.appeend('File', values.hinhAnh, values.hinhAnh.name)
                }
                }
                // Gọi api gửi các giá trị formdata về backend xử lý (sử dụng useDispatch)
                dispatch(themPhimUploadHinhAction(formData));
            // console.log('formData', formData);
        }
    });
    // Khai báo cho hàm "Ngày khởi chiếu"
    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
    };
    // Hàm Switch
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    };
    // Hàm tăng giảm số lượng trong đánh giá
    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    // Hàm upload hình ảnh
    const handleChangeFile = (e) => {
        // Lấy file ra từ e
        let file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/git' || file.type === 'image/png'){
            // Tạo đối tượng để đọc file
            let reader = new FileReader ();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                console.log(e.target.result);
                setImgSrc(e.target.result); // Note: Hình base 64
            }
            // Đem dữ liệu file lưu vào formik
            formik.setFieldValue('hinhAnh', file);
        }
    }


    //
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <h3 className="mb-8 text-xl font-semibold text-center">Chỉnh sửa phim</h3>
                <Form
                onSubmitCapture={formik.handleSubmit}
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    layout="horizontal"
                    initialValues={{
                        size: componentSize,
                    }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                >
                    {/* Form Size */}
                    <Form.Item label="Form Size" name="size">
                        <Radio.Group>
                            <Radio.Button value="small">Small</Radio.Button>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="large">Large</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    {/* Tên phim */}
                    <Form.Item label="Tên Phim">
                        <Input name="tenPhim" onChange={formik.handleChange}/>
                    </Form.Item>

                    {/* Trailer */}
                    <Form.Item label="Trailer">
                        <Input name="trailer" onChange={formik.handleChange}/>
                    </Form.Item>

                    {/* Mô tả */}
                    <Form.Item label="Mô tả">
                        <Input name="moTa" onChange={formik.handleChange}/>
                    </Form.Item>

                    {/* Ngày khởi chiếu */}
                    <Form.Item label="Ngày khởi chiếu">
                        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker}/>
                    </Form.Item>

                    {/* Đang chiếu */}
                    <Form.Item label="Đang chiếu" valuePropName="checked">
                        <Switch name="dangChieu" onChange={handleChangeSwitch('dangChieu')}/>
                    </Form.Item>

                    {/* Sắp chiếu */}
                    <Form.Item label="Sắp chiếu" valuePropName="checked">
                        <Switch name="sapChieu" onChange={handleChangeSwitch('sapChieu')}/>
                    </Form.Item>

                    {/* Hot */}
                    <Form.Item label="Hot" valuePropName="checked">
                        <Switch name="hot" onChange={handleChangeSwitch('hot')}/>
                    </Form.Item>

                    {/* Số sao */}
                    <Form.Item label="Số sao">
                        <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10}/>
                    </Form.Item>

                    {/* Số sao */}
                    <Form.Item label="Hình ảnh">
                        <input type="file"  onChange={handleChangeFile} accept="image/png, image/jpeg,image/git, image/jpg"/>
                        <br/>
                        <img style={{width: 150, height: 150}} src={imgSrc} alt="..."  />
                    </Form.Item>
                    {/* Button */}
                    <Form.Item label="Tác vụ">
                        <button type="submit" className="bg-blue-800 text-white p-2">Thêm phim</button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};