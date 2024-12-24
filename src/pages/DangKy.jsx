import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { VscLockSmall } from "react-icons/vsc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaRegCheckCircle } from "react-icons/fa";
import {
  DOMAIN,
  GROUP_ID,
  REGISTER_API,
  TOKEN_CYBERSOFT,
} from "../Services/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAlertRegisterSuccess,
  handleLoading,
  handleOpenModalAlert,
  handleValidationErr,
} from "../Redux/Reducer/registerReducer";

const DangKy = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [openModalAlert, setOpenModalAlert] = useState(false);
  // const [alertDetails, setAlertDetails] = useState({
  //   icon: <></>,
  //   title: "",
  //   buttonDiv: <></>,
  // });
  // const [validationErr, setValidationErr] = useState({
  //   isValidationErr: false,
  //   message: "",
  // });

  const loading = useSelector((state) => state.registerReducer.loading);
  const openModalAlert = useSelector(
    (state) => state.registerReducer.openModalAlert
  );
  const alertRegisterSuccess = useSelector(
    (state) => state.registerReducer.alertRegisterSuccess
  );
  const validationErr = useSelector(
    (state) => state.registerReducer.validationErr
  );

  const dispatch = useDispatch();

  // const handleAlert = (isSuccess) => {
  //   console.log("isSuccess: ", isSuccess);
  //   // if (isSuccess) {
  //   //   const payload = {
  //   //     icon: <FaRegCheckCircle className="alert-icon text-green-300 " />,
  //   //     title: "Đăng ký tài khoản thành công !",
  //   //     buttonDiv: (
  //   //       <>
  //   //         <NavLink to="/">
  //   //           <Button color="gray">Trang Chủ</Button>
  //   //         </NavLink>
  //   //         <NavLink to="/DangNhap">
  //   //           <Button>Đăng Nhập</Button>
  //   //         </NavLink>
  //   //       </>
  //   //     ),
  //   //   };
  //   //   dispatch(handleAlertRegisterSuccess(payload));
  //   // } else {
  //   //   const payload = {
  //   //     icon: (
  //   //       <HiOutlineExclamationCircle className="alert-icon text-gray-300" />
  //   //     ),
  //   //     title:
  //   //       "Đã có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại sau!",
  //   //     buttonDiv: (
  //   //       <Button
  //   //         color="failure"
  //   //         onClick={() => dispatch(handleOpenModalAlert(false))}
  //   //       >
  //   //         Close
  //   //       </Button>
  //   //     ),
  //   //   };
  //   //   dispatch(handleAlertRegisterSuccess(payload));
  //   // }
  // };

  const handleSubmit = (data) => {
    dispatch(handleLoading(true));

    const { username, password, fullName, email, phone } = data;
    const payload = {
      taiKhoan: username,
      matKhau: password,
      email: email,
      soDt: phone,
      maNhom: GROUP_ID,
      hoTen: fullName,
    };
    console.log("payload: ", payload);

    axios({
      url: DOMAIN + REGISTER_API,
      method: "POST",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
      data: payload,
    })
      .then((response) => {
        console.log("response: ", response);
        dispatch(handleLoading(false));
        dispatch(handleAlertRegisterSuccess(true));
        const payload = { isValidationErr: false };
        dispatch(handleValidationErr(payload));

        dispatch(handleOpenModalAlert(true));
      })
      .catch((error) => {
        dispatch(handleLoading(false));
        console.error("error: ", error.response.data.content);
        console.error("error: ", error.status);
        if (error.status === 400) {
          const payload = {
            isValidationErr: true,
            message: error.response.data.content,
          };
          dispatch(handleValidationErr(payload));
        } else {
          dispatch(handleAlertRegisterSuccess(false));
          dispatch(handleOpenModalAlert(true));
        }
      });
  };

  // Validation Schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Tài khoản không được bỏ trống !"),
    password: Yup.string()
      .required("Mật khẩu không được bỏ trống !")
      .min(8, "Mật khẩu ít nhất 8 ký tự !")
      .max(20, "Mật khẩu không quá 20 ký tự !")
      .matches(/[a-z]/, "Mật khẩu phải có ít nhất một ký tự viết thường !")
      .matches(/[A-Z]/, "Mật khẩu phải có ít nhất một ký tự viết hoa !")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Mật khẩu phải có ít nhất một ký tự đặc biệt !"
      ),
    confirmPassword: Yup.string()
      .required("Nhập lại mật khẩu không được bỏ trống !")
      .oneOf([Yup.ref("password"), null], "Mật khẩu nhập lại chưa khớp !"),
    fullName: Yup.string().required("Họ tên không được bỏ trống !"),
    email: Yup.string()
      .required("Email không được bỏ trống !")
      .email("Email không hợp lệ !"),
    phone: Yup.string().matches(
      /^(0|84|84\s)[0-9]{9}$/,
      "Số điện thoại không hợp lệ !"
    ),
  });

  return (
    <>
      {/* BLOCK MAIN */}
      <div className="register">
        <div className="register_popup">
          <div className="popup_title">
            <div className="icon">
              <VscLockSmall className="text-2xl text-white" />
            </div>
            <h2>Đăng Ký</h2>
          </div>

          <Formik
            initialValues={{
              username: "",
              password: "",
              confirmPassword: "",
              fullName: "",
              email: "",
              phone: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSubmit(values); // Hàm xử lý đăng ký
            }}
          >
            {({ touched, errors }) => {
              return (
                <Form>
                  <div className="space-y-4">
                    {/* Tài khoản */}
                    <div className="form-group">
                      <Field
                        type="text"
                        name="username"
                        className={`form-input w-full p-3 border rounded-md ${
                          touched.username && errors.username
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Tài khoản *"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="errMess"
                      />
                    </div>

                    {/* Mật khẩu */}
                    <div className="form-group">
                      <div className="flex">
                        <Field
                          type={passwordVisible ? "text" : "password"}
                          name="password"
                          className={`form-input w-full p-3 border rounded-md ${
                            touched.password && errors.password
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Mật khẩu *"
                          title="Mật khẩu 8 - 20 ký tự. Có ít nhất 1 ký tự viết thường, 1 ký tự viết hoa và 1 ký tự đặc biệt"
                        />
                        <button
                          type="button"
                          className="-ml-10"
                          onClick={() => {
                            setPasswordVisible(!passwordVisible);
                          }}
                        >
                          {passwordVisible ? (
                            <FaEye className="custom_icon" />
                          ) : (
                            <FaEyeSlash className="custom_icon" />
                          )}
                        </button>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="errMess"
                      />
                    </div>

                    {/* Nhập lại mật khẩu */}
                    <div className="form-group">
                      <div className="flex">
                        <Field
                          type={passwordVisible ? "text" : "password"}
                          name="confirmPassword"
                          className={`form-input w-full p-3 border rounded-md ${
                            touched.confirmPassword && errors.confirmPassword
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Nhập lại mật khẩu *"
                        />
                        <button
                          type="button"
                          className="-ml-10"
                          onClick={() => {
                            setPasswordVisible(!passwordVisible);
                          }}
                        >
                          {passwordVisible ? (
                            <FaEye className="custom_icon" />
                          ) : (
                            <FaEyeSlash className="custom_icon" />
                          )}
                        </button>
                      </div>
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="errMess"
                      />
                    </div>

                    {/* Họ tên */}
                    <div className="form-group">
                      <Field
                        type="text"
                        name="fullName"
                        className={`form-input w-full p-3 border rounded-md ${
                          touched.fullName && errors.fullName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Họ tên *"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="errMess"
                      />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <Field
                        type="email"
                        name="email"
                        className={`form-input w-full p-3 border rounded-md ${
                          touched.email && errors.email
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Email *"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="errMess"
                      />
                    </div>

                    {/* phone */}
                    <div className="form-group">
                      <Field
                        type="text"
                        name="phone"
                        className={`form-input w-full p-3 border rounded-md ${
                          touched.phone && errors.phone
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Số điện thoại"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="errMess"
                      />
                    </div>

                    {/* Error validation from BE */}
                    {validationErr.isValidationErr ? (
                      <div className="errMessValidation">
                        <HiOutlineExclamationCircle className="text-xl text-red-500" />
                        {validationErr.message}
                      </div>
                    ) : (
                      <></>
                    )}

                    {/* Nút đăng ký */}
                    <button
                      type="submit"
                      className="btn-submit"
                      disabled={loading}
                    >
                      {loading ? <div className="spinner"></div> : "ĐĂNG KÝ"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>

          {/* Chuyển sang trang Đăng nhập */}
          <div className="navigate">
            <p>
              Bạn đã có tài khoản?{" "}
              <NavLink to="/DangNhap" className="text-blue-600 hover:underline">
                Đăng nhập
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      {/* BLOCK ALERT */}
      <div className="alert_register">
        <Modal
          show={openModalAlert}
          size="lg"
          className="-ml-3"
          onClose={() => dispatch(handleOpenModalAlert(false))}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="alert_register_info">
              {alertRegisterSuccess ? (
                <FaRegCheckCircle className="alert-icon text-green-300 " />
              ) : (
                <HiOutlineExclamationCircle className="alert-icon text-gray-300" />
              )}
              <h3 className="title">
                {alertRegisterSuccess
                  ? "Đăng ký tài khoản thành công !"
                  : "Đã có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại sau!"}
              </h3>
              <div className="btn">
                {alertRegisterSuccess ? (
                  <>
                    <NavLink to="/">
                      <Button
                        color="gray"
                        onClick={() => dispatch(handleOpenModalAlert(false))}
                      >
                        Trang Chủ
                      </Button>
                    </NavLink>
                    <NavLink to="/DangNhap">
                      <Button
                        onClick={() => dispatch(handleOpenModalAlert(false))}
                      >
                        Đăng Nhập
                      </Button>
                    </NavLink>
                  </>
                ) : (
                  <Button
                    color="failure"
                    onClick={() => dispatch(handleOpenModalAlert(false))}
                  >
                    Close
                  </Button>
                )}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default DangKy;
