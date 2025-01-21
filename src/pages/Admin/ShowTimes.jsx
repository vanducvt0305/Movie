import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Select } from 'antd';
import { Cascader } from 'antd';
import { DatePicker } from 'antd';
import { InputNumber } from 'antd';
import { quanLyRapService } from '../../Services/QuanLyRapService';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { quanLyDatVeService } from '../../Services/QuanLyDatVeService';

// useState

    
    
    
const ShowTimes = (props) => {

    const { id } = useParams();

    // useFormik
    const formik = useFormik({
        initialValues: {
            maPhim: id, // Sử dụng `id` từ useParams
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
        onSubmit: async (values) => {
            console.log('value:', values);
            try {
                const result = await quanLyDatVeService.taoLichChieu(values);
                alert(result.data.content);
            } catch (error) {
                console.log('error: ', error.response?.data)
            }
        }
    });

    // chọn hệ thống rạp
    const options = [
        {
        value: 'zhejiang',
        label: 'Zhejiang',
        
        },
        {
        value: 'jiangsu',
        label: 'Jiangsu',
        },
    ];
    const [state, setState ] = useState({
        heThongRapChieu: [],
        cumRapChieu: [],
    })
    console.log(state.heThongRapChieu)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await quanLyRapService.layThongTinHeThongRap();
                setState({
                    ...state,
                    heThongRapChieu: result.data.content,
                });
            } catch (error) {
                console.log('Error:', error);
            }
        };
    
        fetchData();
    }, []); 
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    // Chọn hệ thống rạp chiếu
        const handleChangeHeThongRap = async (values) => {
            // từ hệ thống rạp call api lấy thông tin rạp
            try {
                let result = await quanLyRapService.layThongTinCumRap(values);
                // Gán giá trị cụm rạp vào state.cumRap
                setState({
                    ...state,
                    cumRapChieu:result.data.content
                })
            } catch (error) {
                console.log('error', error.response?.data);
            }
        }
        // 
        const handleChangeCumRap = (value) => {
            formik.setFieldValue('maRap', value)
        }
        // chọn ngày giờ chiếu 
        const onOk = (values) => {
            console.log('value: ', values)
        }
        const onChangeDate = (values) => {

            formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY'))
            console.log('value: ', values)
        }
        // input number
        const onchangeInputNumber = (values) => {
            formik.setFieldValue('giaVe', values)
        }
        const onChange = (date, dateString) => {
            console.log(date, dateString);
        };
    return (
            <form>
                <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            onSubmitCapture={formik.handleSubmit}
        >
            <h3 className='text-xl text-black font-bold'>Tạo lịch chiếu</h3>
            {/* Hệ thống rạp */}
            <Form.Item
            label="Hệ thống rạp"
        
            >
            <Select options={state.heThongRapChieu?.map((htr, index) => {return {label:htr.tenHeThongRap, value:htr.tenHeThongRap}})} onChange={handleChangeHeThongRap} placeholder="Hệ thống rạp" />
            </Form.Item>
            {/* Cụm rạp */}
            <Form.Item
            label="Cụm rạp"
            >
            <Select options={state.cumRapChieu?.map((cumRap, index) => ({label:cumRap.tenCumRap, value:cumRap.tenCumRap}))} onChange={handleChangeHeThongRap} placeholder=" Chọn cụm rạp" />
            </Form.Item>
            {/*  */}
            <Form.Item
            label="Ngày/ giờ chiếu"
            >
            <DatePicker
                format={{
                    format: 'YYYY-MM-DD',
                    type: 'mask',
                }}
                onChange={onChangeDate}
                placeholder='Chọn ngày giờ chiếu'
                onOk = {onOk}
    />
            </Form.Item>
            {/*  */}
            <Form.Item
            label="Ngày/ giờ chiếu"
            >
            <InputNumber min={1} max={10} defaultValue={3} onChange={onchangeInputNumber} />
            </Form.Item>
            {/* Button tao lich  */}
            <Form.Item
            label="Chức năng"
            >
            <Button type="submit" >
                Tạo lịch chiếu
            </Button>
            </Form.Item>
        </Form>
        </form>
    )
}

export default ShowTimes