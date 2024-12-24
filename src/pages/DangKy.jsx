import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { VscLockSmall } from "react-icons/vsc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Modal, theme } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaRegCheckCircle } from "react-icons/fa";

const DangKy = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openModalAlert, setOpenModalAlert] = useState(false);
  const [alertDetails, setAlertDetails] = useState({
    icon: <></>,
    title: "",
    buttonDiv: <></>,
  });

  const handleAlert = (boolean) => {
    console.log("boolean: ", boolean); // boolean nay dai dien cho call data dc hay ko // khác lỗi validation từ BE
    if (boolean) {
      // setAlertDetails() // set noi dung success
      setAlertDetails({
        icon: <FaRegCheckCircle className="alert-icon text-green-300 " />,
        title: "Đăng ký tài khoản thành công !",
        buttonDiv: (
          <>
            <NavLink to="/">
              <Button color="gray" onClick={() => setOpenModalAlert(false)}>
                Trang Chủ
              </Button>
            </NavLink>
            <NavLink to="/DangNhap">
              <Button onClick={() => setOpenModalAlert(false)}>
                Đăng Nhập
              </Button>
            </NavLink>
          </>
        ),
      });
    } else {
      // setAlertDetails() // set noi dung fail
      setAlertDetails({
        icon: (
          <HiOutlineExclamationCircle className="alert-icon text-gray-300" />
        ),
        title:
          "Đã có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại sau!",
        buttonDiv: (
          <Button color="failure" onClick={() => setOpenModalAlert(false)}>
            Close
          </Button>
        ),
      });
    }
  };

  const ValidationBE = (boolean) => {
    if (boolean) {
      return (
        <div className="errMessBE">
          <HiOutlineExclamationCircle className="text-xl text-red-500" />
          Noi dung error
        </div>
      );
    }
  };

  const handleSubmit = (data) => {
    console.log("Đăng ký thành công:", data);
    setLoading(true);
    // Giả lập kéo data (thay bằng API khi code tính năng)
    setTimeout(() => {
      setLoading(false);
      handleAlert(true); //true false tuy thuoc vao response cua API
      setOpenModalAlert(true);
    }, 2000);
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
    soDT: Yup.string().matches(
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
              soDT: "",
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

                    {/* SDT */}
                    <div className="form-group">
                      <Field
                        type="text"
                        name="soDT"
                        className={`form-input w-full p-3 border rounded-md ${
                          touched.soDT && errors.soDT
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Số điện thoại"
                      />
                      <ErrorMessage
                        name="soDT"
                        component="div"
                        className="errMess"
                      />
                    </div>

                    {/* Error validation from BE */}
                    {ValidationBE(false)}

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
          onClose={() => setOpenModalAlert(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="alert_register_info">
              {alertDetails.icon}
              <h3 className="title">{alertDetails.title}</h3>
              <div className="btn">{alertDetails.buttonDiv}</div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default DangKy;
