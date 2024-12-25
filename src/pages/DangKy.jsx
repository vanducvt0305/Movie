import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { VscLockSmall } from "react-icons/vsc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLoading,
  handleOpenModalAlert,
} from "../Redux/Reducer/registerReducer";
import { handleRegisterAction } from "../Redux/Actions/registerAction";

const DangKy = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
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
              dispatch(handleLoading(true));
              dispatch(handleRegisterAction(values));
            }}
          >
            {({ touched, errors }) => {
              return (
                <Form>
                  <div className="space-y-4">
                    {/* username */}
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

                    {/* password */}
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

                    {/* confirmPassword */}
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

                    {/* fullName */}
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

                    {/* Button Sign Up */}
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

          {/* navigate to Login */}
          <div className="navigate">
            <p>
              Bạn đã có tài khoản?{" "}
              <NavLink to="/dangnhap" className="text-blue-600 hover:underline">
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
                    <NavLink to="/dangnhap">
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
