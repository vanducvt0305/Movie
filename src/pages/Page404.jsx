import React from "react";

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-9xl scale-150 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        404
      </h1>
      <p className="text-2xl text-gray-500 mt-10 tracking-wider">
        Trang bạn truy cập không tồn tại !
      </p>
      <a
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition"
      >
        Trở về trang chủ
      </a>
    </div>
  );
};

export default Page404;
