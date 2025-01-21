import React, { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  getTypeOfUserList,
  updateUser,
} from "../../Redux/Actions/adminAction";
import {
  handleLoading,
  handleNavigateBackToAdminUser,
} from "../../Redux/Reducer/adminReducer";

const ChinhSuaNguoiDung = () => {
  const isEdit = useMatch("/quantri/chinhsuanguoidung/:taikhoan");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const selectedUserInfo = useSelector(
    (state) => state.adminReducer.selectedUser
  );
  const { taiKhoan, matKhau, hoTen, email, soDT, maLoaiNguoiDung } =
    selectedUserInfo;
  const navigateToAdminUser = useSelector(
    (state) => state.adminReducer.navigateBackToAdminUser
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (navigateToAdminUser) {
    navigate("/quantri/nguoidung");
    dispatch(handleNavigateBackToAdminUser(false));
  }
  const isLoading = useSelector((state) => state.adminReducer.isLoading);
  useEffect(() => {
    dispatch(getTypeOfUserList());
  }, []);
  const typeOfUserList = useSelector((state) => state.adminReducer.typeOfUser);

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
    fullName: Yup.string().required("Họ tên không được bỏ trống !"),
    typeOf: Yup.string().required("Loại người dùng không được bỏ trống!"),
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
      <div className="admin-edit-user">
        <h2 className="title">
          {isEdit ? "Cập nhật thông tin người dùng" : "Thêm người dùng"}
        </h2>
        <Formik
          initialValues={{
            username: isEdit ? taiKhoan : "",
            password: isEdit ? matKhau : "",
            typeOf: isEdit ? maLoaiNguoiDung : "",
            fullName: isEdit ? hoTen : "",
            email: isEdit ? email : "",
            phone: isEdit ? soDT : "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            isEdit ? dispatch(updateUser(values)) : dispatch(addUser(values));
            dispatch(handleLoading(true));
          }}
        >
          {({ touched, errors }) => {
            return (
              <Form>
                <div className="form-edit">
                  <div className="input">
                    {/* username */}
                    <div className="form-group">
                      <Field
                        type="text"
                        name="username"
                        className={`form-input w-full p-3 border rounded-md ${
                          isEdit
                            ? "border-gray-300 bg-gray-100"
                            : `border-${
                                touched.username && errors.username
                                  ? "red-500"
                                  : "gray-300"
                              }`
                        }`}
                        placeholder="Tài khoản *"
                        disabled={isEdit}
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="errMess"
                      />
                    </div>
                    {/* email */}
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
                    {/* typeOf */}
                    <div className="form-group">
                      <Field
                        as="select"
                        name="typeOf"
                        className={`form-input w-full p-3 border rounded-md ${
                          touched.typeOf && errors.typeOf
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Chọn loại người dùng *</option>
                        {typeOfUserList.map((item) => (
                          <option
                            key={item.maLoaiNguoiDung}
                            value={item.maLoaiNguoiDung}
                          >
                            {item.tenLoai}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="typeOf"
                        component="div"
                        className="errMess"
                      />
                    </div>
                  </div>
                  {/* Button Submit */}
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="spinner"></div>
                    ) : isEdit ? (
                      "LƯU"
                    ) : (
                      "THÊM"
                    )}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default ChinhSuaNguoiDung;
