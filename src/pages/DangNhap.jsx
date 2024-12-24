import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const DangNhap = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberAccount, setRememberAccount] = useState(false);

  // Validation Schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Tài khoản không được bỏ trống !"),
    password: Yup.string().required("Mật khẩu không được bỏ trống !"),
  });

  return (
    <div className="login">
      <div className="login_popup">
        <div className="popup_title">
          <div className="icon">
            <FaUserLarge className="text-xl text-white" />
          </div>
          <h2>Đăng Nhập</h2>
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
            console.log("Đăng nhập thành công:", values);
            // Xử lý đăng nhập ở đây
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

                  {/* Nhớ tài khoản */}
                  <div className="rememberAccount">
                    <button
                      onClick={() => {
                        setRememberAccount(!rememberAccount);
                        // xử lý tiếp code khi nhớ tài khoản
                      }}
                    >
                      {rememberAccount ? (
                        <MdCheckBox className="MdCheckBox" />
                      ) : (
                        <MdCheckBoxOutlineBlank className="custom_icon" />
                      )}
                    </button>
                    <p>Nhớ tài khoản</p>
                  </div>

                  {/* Nút đăng ký */}
                  <button type="submit" className="btn-submit">
                    ĐĂNG NHẬP
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>

        {/* Chuyển sang trang Đăng ký */}
        <div className="navigate">
          <p>
            Bạn chưa có tài khoản?
            <NavLink
              to="/DangKy"
              className="text-blue-600 hover:underline ml-1"
            >
              Đăng ký
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DangNhap;
