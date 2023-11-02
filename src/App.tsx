//---Start
import "./App.css";
import Child1 from "./components/Child1/Childt1.tsx";

const arrayCategories = [
  {
    title: "Thời trang nam",
    avatar:
      "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
  },
  {
    title: "Điện thoại & sức khỏe",
    avatar:
      "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
  },
  {
    title: "Thiết bị điện tử",
    avatar:
      "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
  },
  {
    title: "Máy tính & laptop",
    avatar:
      "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
  },
  {
    title: "Máy ảnh & máy quay phim",
    avatar:
      "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn",
  },
  
];

const arraySaleCategories = [
  {
    title: "Khung Giờ Săn Sale",
    avatar: "https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi",
  },
  {
    title: "Miễn Phí Ship - Có Shopee",
    avatar: "https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi",
  },
  {
    title: "Voucher Giảm Đến 500.000Đ",
    avatar: "https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi",
  },
]

function App() {
  return (<>
    <div>
      <div style={{ display: "flex" }}>      
        {arrayCategories.map((each) => {
        return <Child1 title={each.title} avatar={each.avatar} />;
      })}
      </div>
      <div style={{ display: "flex", marginTop: "100px"}}  >
      {arraySaleCategories.map((each) => {
        return <Child1 isSmallAvatar={true} title={each.title} avatar={each.avatar} />;
      })}
      </div>
    </div></>
  );
}

export default App;