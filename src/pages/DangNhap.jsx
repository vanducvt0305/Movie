import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLoading,
  handleOpenModalAlert,
  handleRememberAccount,
} from "../Redux/Reducer/loginReducer";

import { handleLoginAction } from "../Redux/Actions/loginAction";

const DangNhap = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const rememberAccount = useSelector(
    (state) => state.loginReducer.rememberAccount
  );

  const loading = useSelector((state) => state.loginReducer.loading);
  const openModalAlert = useSelector(
    (state) => state.loginReducer.openModalAlert
  );
  const alertLoginSuccess = useSelector(
    (state) => state.loginReducer.alertLoginSuccess
  );
  const validationErr = useSelector(
    (state) => state.loginReducer.validationErr
  );
  const loginInfo = useSelector((state) => state.loginReducer.loginInfo);

  const dispatch = useDispatch();
  // Validation Schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Tài khoản không được bỏ trống !"),
    password: Yup.string().required("Mật khẩu không được bỏ trống !"),
  });

  return (
    <>
      {/* BLOCK MAIN */}
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
              username: rememberAccount ? loginInfo.username : "",
              password: rememberAccount ? loginInfo.password : "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(handleLoading(true));
              dispatch(handleLoginAction(values, rememberAccount));
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

                    {/* rememberAccount */}
                    <div className="rememberAccount">
                      <button
                        type="button"
                        onClick={() => {
                          dispatch(handleRememberAccount(!rememberAccount));
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

                    {/* Error validation from BE */}
                    {validationErr.isValidationErr ? (
                      <div className="errMessValidation">
                        <HiOutlineExclamationCircle className="text-xl text-red-500" />
                        {validationErr.message}
                      </div>
                    ) : (
                      <></>
                    )}

                    {/* btn Sign In */}
                    <button
                      type="submit"
                      className="btn-submit"
                      disabled={loading}
                    >
                      {loading ? <div className="spinner"></div> : "ĐĂNG NHẬP"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>

          {/* navigate to Sign Up */}
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
      {/* BLOCK ALERT */}
      <div className="alert_login">
        <Modal
          show={openModalAlert}
          size="lg"
          className="-ml-3"
          onClose={() => dispatch(handleOpenModalAlert(false))}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="alert_login_info">
              {alertLoginSuccess ? (
                <FaRegCheckCircle className="alert-icon text-green-300 " />
              ) : (
                <HiOutlineExclamationCircle className="alert-icon text-gray-300" />
              )}
              <h3 className="title">
                {alertLoginSuccess
                  ? "Đăng nhập thành công ! Bạn sẽ được chuyển đến trang chủ"
                  : "Đã có lỗi xảy ra trong quá trình đăng nhập. Vui lòng thử lại sau!"}
              </h3>
              <div className="btn">
                {alertLoginSuccess ? (
                  <></>
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

export default DangNhap;
