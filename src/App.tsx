//---Start
import "./App.css";
import Child1 from "./components/Child1/Childt1.tsx";

//Data => map để truyền title với avatar vào 


const arrayItem = [
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

function App() {
  return (
    <div style={{ display: "flex" }}>
      {arrayItem.map((each) => {
        return <Child1 title={each.title} avatar={each.avatar} />;
      })}
    </div>
  );
}

export default App;