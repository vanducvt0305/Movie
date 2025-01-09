import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "../Actions/type/QuanLyPhimType";

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 1283,
            "tenPhim": "Lật mặt 48h",
            "biDanh": "lat-mat-48h1234",
            "trailer": "https://www.youtube.com/watch?v=kBY2k3G6LsM",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg",
            "moTa": "",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-10-10T00:00:00",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "maPhim": 1314,
            "tenPhim": "Cua lại vợ bầu",
            "biDanh": "black-windo",
            "trailer": "https://www.youtube.com/watch?v=l8vTMxuvz6Y",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/cua-lai-vo-bau_gp01.jpg",
            "moTa": "Trọng Thoại và Nhã Linh yêu nhau đã được bảy năm. Những lỗi lầm nho nhỏ bắt đầu tích tụ thành mâu thuẫn cực lớn đẩy cả hai xa nhau. Lại thêm sự xuất hiện của người cũ Quý Khánh càng khiến Nhã Linh xao lòng. Và rồi, cô có thai. Rốt cuộc đứa bé là của ai và Nhã Linh sẽ chọn người đàn ông nào đi tiếp cùng mình",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-08-26T15:11:29.533",
            "danhGia": 10,
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "maPhim": 1318,
            "tenPhim": "Lừa đểu gặp lừa đảo",
            "biDanh": "lua-deu-gap-lua-dao-5",
            "trailer": "https://www.youtube.com/watch?v=cy7O9tk0XZA",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-daoo_gp01.jpg",
            "moTa": "Lừa Đểu Gặp Lừa Đảo xoay quanh lần gặp gỡ \"oan gia\" giữa siêu lừa đảo Tower cùng cô nàng bị lừa tình Ina, cả 2 sẽ cùng hợp tác trong phi vụ \"lừa lại tên lừa đểu\" Petch - tên bạn trai bội bạc của Ina bằng những chiêu trò lừa đảo không hồi kết.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-08-26T14:47:53.63",
            "danhGia": 10,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "maPhim": 1319,
            "tenPhim": "Siêu lừa gặp Siêu lầy",
            "biDanh": "sieu-lua-gap-sieu-lay",
            "trailer": "https://www.youtube.com/watch?v=kdn0xrDf8tY",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sieu-lua-sieu-lay_gp01.jpg",
            "moTa": "Thuộc phong cách hành động – hài hước với các “cú lừa” thông minh và lầy lội đến từ bộ đôi Tú (Anh Tú) và Khoa (Mạc Văn Khoa), Siêu Lừa Gặp Siêu Lầy của đạo diễn Võ Thanh Hòa theo chân của Khoa – tên lừa đảo tầm cỡ “quốc nội” đến đảo ngọc Phú Quốc với mong muốn đổi đời. Tại đây, Khoa gặp Tú – tay lừa đảo “hàng real” và cùng Tú thực hiện các phi vụ từ nhỏ đến lớn. Cứ ngỡ sự ranh mãnh của Tú và sự may mắn trời cho của Khoa sẽ giúp họ trở thành bộ đôi bất khả chiến bại, nào ngờ lại đối mặt với nhiều tình huống dở khóc – dở cười. Nhất là khi băng nhóm của bộ đôi nhanh chóng mở rộng vì sự góp mặt của ông Năm (Nhất Trung) và bé Mã Lai (Ngọc Phước)",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-10-10T00:00:00",
            "danhGia": 4,
            "hot": false,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "maPhim": 1320,
            "tenPhim": "Bố già",
            "biDanh": "bo-gia",
            "trailer": "https://www.youtube.com/watch?v=jluSu8Rw6YE",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bo-giaa_gp01.jpg",
            "moTa": "Chiếc trailer hội tụ đủ mọi cung bậc cảm xúc, bà con đã chuẩn bị cho một cái Tết bao xôm, bao dzui, bao hoan hỉ cùng xóm Bố Già tụi tui chưa? Hài thì hài banh nóc mà bật kênh \"đíp\" là cũng thấm dữ lắm nghen.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-08-30T00:00:00",
            "danhGia": 5,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "maPhim": 1321,
            "tenPhim": "Lật mặt 7: Một điều ước",
            "biDanh": "lat-mat-7",
            "trailer": "https://www.youtube.com/watch?v=d1ZHdosjNX8",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/latmat7_gp01.jpg",
            "moTa": "Mẹ thương yêu con vô điều kiện, nhưng mẹ bệnh con chưa đủ điều kiện để về chăm",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-07-29T00:00:00",
            "danhGia": 10,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "maPhim": 1322,
            "tenPhim": "Bỗng dưng trúng số",
            "biDanh": "bong-dung-trung-so",
            "trailer": "https://www.youtube.com/watch?v=1H9HPbWt3es",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bong-dung-trung-so_gp01.jpg",
            "moTa": "Người lính Hàn Quốc Chun Woo (Ko Kyoung-pyo) vô tình nhặt được tờ vé số trúng độc đắc trị giá lên đến gần 6 triệu đô! Nhưng chưa kịp vui mừng bao lâu, tờ vé số ấy không may bị cuốn bay sang bên kia biên giới và rơi vào tay anh lính Triều Tiên Yong Ho (Lee Yi-kyung). Chun Woo cần tờ vé số để đổi tiền, trong khi Yong Ho dù nắm giữ tờ vé quan trọng lại không thể đặt chân đến Hàn Quốc. Câu chuyện ngày càng trở nên rắc rối và hài hước khi có thêm những người đồng đội của hai anh chàng biết được sự việc và nhất quyết tham gia vào cuộc đàm phán chia tiền",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-10-06T21:15:03.717",
            "danhGia": 9,
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "maPhim": 1323,
            "tenPhim": "Deadpool & Wolverine",
            "biDanh": "deadpool",
            "trailer": "https://www.youtube.com/watch?v=73_1biulkYk",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/deadpool_gp01.jpg",
            "moTa": "Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-11-02T00:00:00",
            "danhGia": 9,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "maPhim": 1324,
            "tenPhim": "THÁM TỬ LỪNG DANH CONAN: NGÔI SAO 5 CÁNH 1 TRIỆU ĐÔ",
            "biDanh": "conan-5-canh",
            "trailer": "https://www.youtube.com/watch?v=9BpvF4Uh71o",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/conan-5-canh_gp01.jpg",
            "moTa": "ed 2 Unrated one-ups the original with this laugh out loud sequel!  Fans of Family Guy, the Cleveland Show, and Ted will enjoy this live-action anthem to irreverence.  The Thunder Buddies take on Ted’s faltering marriage, John looking for a new love, and the entire legal system.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-10-28T16:14:30.263",
            "danhGia": 8,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "maPhim": 1325,
            "tenPhim": "Nobita và bản giao hưởng Địa Cầu",
            "biDanh": "teddy-2",
            "trailer": "https://www.youtube.com/watch?v=Yug8gbDd5EQ",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nobita-1_gp01.jpg",
            "moTa": "Chuyến phiêu lưu mới cùng những người bạn mới! Hành trình tìm lại âm nhạc đã biến mất của Doraemon và các bạn sẽ như thế nào đây? Nôn nao ra rạp nhập hội quá nè, bộ phim hứa hẹn sẽ làm bạn vừa cười vùa xúc động luôn",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-07-04T10:08:13.493",
            "danhGia": 10,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "maPhim": 1326,
            "tenPhim": "Marvel Studios' Avengers: Endgame",
            "biDanh": "ted-2",
            "trailer": "https://www.youtube.com/watch?v=TcMBFSGVi1c",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/endgame_gp01.jpg",
            "moTa": "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-08-16T05:19:09.78",
            "danhGia": 7,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "maPhim": 1327,
            "tenPhim": "The Wolverine",
            "biDanh": "ted-222",
            "trailer": "https://www.youtube.com/watch?v=u1VCP3O8wG0",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/wolverine_gp01.jpg",
            "moTa": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-09-12T00:00:00",
            "danhGia": 5,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "maPhim": 1328,
            "tenPhim": "MAI",
            "biDanh": "summoner-wars123",
            "trailer": "https://www.youtube.com/watch?v=EX6clvId19s",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/mai_gp01.jpg",
            "moTa": "Mai là một bộ phim điện ảnh Việt Nam thuộc thể loại hài – lãng mạn – chính kịch ra mắt vào năm 2024 do Trấn Thành làm đạo diễn và đồng sản xuất, đánh dấu đây là bộ phim điện ảnh thứ ba anh làm đạo diễn, sau Bố già và Nhà bà Nữ",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-08-21T23:10:30.213",
            "danhGia": 6,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "maPhim": 1329,
            "tenPhim": "Móng vuốt",
            "biDanh": "bo-gia",
            "trailer": "https://www.youtube.com/watch?v=FHN9VR1OOik",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/mong-vuot_gp01.jpg",
            "moTa": "Móng Vuốt dẫn dắt câu chuyện đi từ buổi tiệc dã ngoại náo nhiệt của một nhóm bạn đến một kết cục kinh hoàng khi phải đấu tranh sinh tồn với một con ác thú",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-07-15T09:39:17.087",
            "danhGia": 10,
            "hot": false,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "maPhim": 1330,
            "tenPhim": "Doctor Strange",
            "biDanh": "testing",
            "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/strange_gp01.jpg",
            "moTa": "In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-10-26T18:29:32.96",
            "danhGia": 10,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "maPhim": 14476,
            "tenPhim": "Đám giỗ bên cồn",
            "biDanh": "dam-gio-ben-con",
            "trailer": "https://www.youtube.com/watch?v=l8vTMxuvz6Y",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/dam-gio-ben-con_gp01.jpg",
            "moTa": "chở bà sáu đi ăn đám giỗ",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-12-13T00:00:00",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "maPhim": 14486,
            "tenPhim": "Conan 2",
            "biDanh": "conan-2",
            "trailer": "",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/conan_gp01.png",
            "moTa": "Hay",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-12-19T00:00:00",
            "danhGia": 5,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "maPhim": 14487,
            "tenPhim": "Doraemon",
            "biDanh": "doraemon",
            "trailer": "",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/doraemon_gp01.png",
            "moTa": "Dỡ",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-12-19T00:00:00",
            "danhGia": 2,
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "maPhim": 14488,
            "tenPhim": "loki 333",
            "biDanh": "loki-333",
            "trailer": "https://www.youtube.com/watch?v=6ov9DPDqv9E&ab_channel=GalaxyCinema%28Official%29",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/loki-333_gp01.png",
            "moTa": "test",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2024-12-28T00:00:00",
            "danhGia": 10,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          }
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: [],
    filmDefault: {},

    thongTinPhim: {},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM: {
            // return {
            //     ...state,
            //     arrFilm: action.arrFilm,
            //     arrFilmDefault: action.arrFilm
            // };
        //     state.arrFilm = action.arrFilm;
        //     state.arrFilmDefault = state.arrFilm;
        //     return {...state}
        // }
        // default:
        //     return {...state}; 
          return {
              ...state,
              arrFilm: action.arrFilm,
              arrFilmDefault: [...action.arrFilm], 
          };
      }
      case SET_THONG_TIN_PHIM: {
        state.thongTinPhim = action.thongTinPhim;
        return{...state}
      }
      default:
          return state;
    }
};