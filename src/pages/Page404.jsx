import React from "react";

const Page404 = () => {
  return (
    <div className="notFound">
      <h1 className="title">404</h1>
      <p className="content">Trang bạn truy cập không tồn tại !</p>
      <a href="/" className="navigate">
        Trở về trang chủ
      </a>
    </div>
  );
};

export default Page404;
