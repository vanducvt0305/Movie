import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import TrangChu from "./pages/TrangChu";
import ChiTietPhim from "./pages/ChiTietPhim";
import ChiTietPhongVe from "./pages/ChiTietPhongVe";
import DangNhap from "./pages/DangNhap";
import DangKy from "./pages/DangKy";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import "./App.css";
import QuanTri from "./pages/Admin/QuanTri";
import Phim from "./pages/Admin/Phim";
import NguoiDung from "./pages/Admin/NguoiDung";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<TrangChu />} />
            <Route path="trangchu" element={<TrangChu />} />
            <Route path="chitietphim" element={<ChiTietPhim />} />
            <Route path="chitietphongve" element={<ChiTietPhongVe />} />
            <Route path="dangnhap" element={<DangNhap />} />
            <Route path="dangky" element={<DangKy />} />

            {/* Admin */}
            <Route path="quantri" element={<QuanTri />}>
              <Route index element={<Phim />} />
              <Route path="phim" element={<Phim />} />
              <Route path="nguoidung" element={<NguoiDung />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
