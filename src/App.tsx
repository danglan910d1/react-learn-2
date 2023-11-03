//---Start
import "./App.css";
import TaskView from "./components/TaskView";
import Title from "./components/Title";
import ListMenu from "./components/Menu";
import Task from "./components/Task"


const arrayTask = [
    {
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUd3346itijQ-bhTMcdKoeq9DfxLwueLNkFEVYs98hrQkdbDTTcTmqoTePh0FmG5atE0&usqp=CAU",
        isRemove: false,
        content: "1. Làm bài tập",
        createAt: "01-12-2023",
        isDone: true,
        description: "làm bài tập js + giải thuật toán",
        userName: "Trường"
    },
        {
            avatar:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUd3346itijQ-bhTMcdKoeq9DfxLwueLNkFEVYs98hrQkdbDTTcTmqoTePh0FmG5atE0&usqp=CAU",
            isRemove: false,
            content: "2. Nấu ăn",
            createAt: "02-12-2023",
            isDone: false,
            description: "làm món thịt luộc",
            userName: "Trường"
        },
    {
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUd3346itijQ-bhTMcdKoeq9DfxLwueLNkFEVYs98hrQkdbDTTcTmqoTePh0FmG5atE0&usqp=CAU",
        isRemove: false,
        content: "3. Đi gym",
        createAt: "03-12-2023",
        isDone: true,
        description: "Đi gym lúc 17h",
        userName: "Vinh"
    },
    {
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUd3346itijQ-bhTMcdKoeq9DfxLwueLNkFEVYs98hrQkdbDTTcTmqoTePh0FmG5atE0&usqp=CAU",
        isRemove: false,
        content: "4. Đọc sách",
        createAt: "04-12-2023",
        isDone: false,
        description: "Đọc sách về machine learning",
        userName: "Phú"
    },
    {
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUd3346itijQ-bhTMcdKoeq9DfxLwueLNkFEVYs98hrQkdbDTTcTmqoTePh0FmG5atE0&usqp=CAU",
        isRemove: false,
        content: "5. học code",
        createAt: "05-12-2023",
        isDone: true,
        description: "Học code python",
        userName: "Vinh"
    },
    {
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUd3346itijQ-bhTMcdKoeq9DfxLwueLNkFEVYs98hrQkdbDTTcTmqoTePh0FmG5atE0&usqp=CAU",
        isRemove: false,
        content: "6. Đi chơi",
        createAt: "06-12-2023",
        isDone: false,
        description: "Đi chơi đĩ",
        userName: "Vinh"
    },
    {
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUd3346itijQ-bhTMcdKoeq9DfxLwueLNkFEVYs98hrQkdbDTTcTmqoTePh0FmG5atE0&usqp=CAU",
        isRemove: false,
        content: "7. Chơi game",
        createAt: "07-12-2023",
        isDone: true,
        description: "Chơi game tới chết",
        userName: "Vinh"
    },
    {
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUd3346itijQ-bhTMcdKoeq9DfxLwueLNkFEVYs98hrQkdbDTTcTmqoTePh0FmG5atE0&usqp=CAU",
        isRemove: false,
        content: "8. Đi gym nữa",
        createAt: "08-12-2023",
        isDone: false,
        description: "Đi gym hoài zậy ba",
        userName: "Thiện"
    },
    {
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUd3346itijQ-bhTMcdKoeq9DfxLwueLNkFEVYs98hrQkdbDTTcTmqoTePh0FmG5atE0&usqp=CAU",
        isRemove: false,
        content: "9. Đi gym",
        createAt: "09-12-2023",
        isDone: true,
        description: "Đi gym lúc 17h",
        userName: "Phú"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "9. Học English",
        createAt: "10-12-2023",
        isDone: false,
        description: "Healthy và balence",
        userName: "Phong"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "10. Làm đẹp",
        createAt: "11-12-2023",
        isDone: true,
        description: "Cạnh tranh với trần đức bo",
        userName: "Vinh"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "11. Du lịch",
        createAt: "12-12-2023",
        isDone: false,
        description: "Đi xuất khẩu lao động",
        userName: "Thiện"
    },
    {
        avatar:
            "https://i.pinimg.com/236x/e5/3c/2b/e53c2be482c5cb72afbe31b4bfda988d.jpg",
        isRemove: false,
        content: "12. Đi hát",
        createAt: "13-12-2023",
        isDone: true,
        description: "Karaoke ôm với trường đặng",
        userName: "Vinh"
    },
    {
        avatar:
            "https://i.pinimg.com/236x/e5/3c/2b/e53c2be482c5cb72afbe31b4bfda988d.jpg",
        isRemove: false,
        content: "13. Đi ngủ",
        createAt: "14-12-2023",
        isDone: false,
        description: "Ngủ ngủ ngủ ngủ",
        userName: "Phong"
    },
    {
        avatar:
            "https://i.pinimg.com/236x/e5/3c/2b/e53c2be482c5cb72afbe31b4bfda988d.jpg",
        isRemove: false,
        content: "14. Ngồi thiền",
        createAt: "15-12-2023",
        isDone: true,
        description: "Thiền trong aram",
        userName: "Thiện"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "15. Thụ phấn",
        createAt: "16-12-2023",
        isDone: true,
        description: "Thụ phấn cho cây hoa",
        userName: "Thiện"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "16. No Nut",
        createAt: "17-12-2023",
        isDone: true,
        description: "No nut november",
        userName: "Thiện"
    },
    {
        avatar:
            "https://i.pinimg.com/236x/e5/3c/2b/e53c2be482c5cb72afbe31b4bfda988d.jpg",
        isRemove: false,
        content: "17. Wtf",
        createAt: "18-12-2023",
        isDone: false,
        description: "Tôi đang làm gì đây",
        userName: "Phong"
    },
    {
        avatar:
            "https://i.pinimg.com/236x/e5/3c/2b/e53c2be482c5cb72afbe31b4bfda988d.jpg",
        isRemove: false,
        content: "18. Coi MU",
        createAt: "19-12-2023",
        isDone: false,
        description: "Mafia đá",
        userName: "Vinh"
    },
    {
        avatar:
            "https://i.pinimg.com/236x/e5/3c/2b/e53c2be482c5cb72afbe31b4bfda988d.jpg",
        isRemove: false,
        content: "19. Đi gym",
        createAt: "20-12-2023",
        isDone: false,
        description: "Đi gym hoài vậy????",
        userName: "Trường"
    },
    {
        avatar:
            "https://i.pinimg.com/236x/e5/3c/2b/e53c2be482c5cb72afbe31b4bfda988d.jpg",
        isRemove: false,
        content: "20. Đi gym",
        createAt: "21-12-2023",
        isDone: true,
        description: "Vẫn đi gym",
        userName: "Trường"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "21. Đi gym",
        createAt: "22-12-2023",
        isDone: true,
        description: "Ngủ trong phòng gym",
        userName: "Trường"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "22. Đi gym",
        createAt: "23-12-2023",
        isDone: true,
        description: "Ngủ với vợ chủ phòng gym",
        userName: "Trường"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "23. Đi gym",
        createAt: "24-12-2023",
        isDone: false,
        description: "Ngủ với chủ phòng gym",
        userName: "Trường"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "24. Đi gym",
        createAt: "25-12-2023",
        isDone: true,
        description: "Ngủ chung với nguời đi tập gym",
        userName: "Trường"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "25. Đi gym",
        createAt: "26-12-2023",
        isDone: false,
        description: "Ngủ với tạ trong phòng gym",
        userName: "Trường"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "26. Đi gym",
        createAt: "27-12-2023",
        isDone: true,
        description: "Ngủ với cô lao công phòng gym",
        userName: "Trường"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "27. Đi gym",
        createAt: "28-12-2023",
        isDone: true,
        description: "Ngủ chung với vợ chồng chủ phòng gym",
        userName: "Trường"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "28. Đi gym",
        createAt: "29-12-2023",
        isDone: false,
        description: "Ngủ chung với chủ nợ phòng gym",
        userName: "Trường"
    },    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "29. Đi gym",
        createAt: "30-12-2023",
        isDone: true,
        description: "Ngủ chung với con rơi của chủ phòng gym",
        userName: "Trường"
    },
    {
        avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/3/29/1112-16169938741441412608010.jpeg",
        isRemove: false,
        content: "30. Đi gym",
        createAt: "31-12-2023",
        isDone: false,
        description: "Chết trong lúc ngủ",
        userName: "Trường"
    },
    {
        avatar:
            "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
        isRemove: true,
        content: "31. Đi gym",
        createAt: "22-12-2023",
        isDone: true,
        description: "Đi gym lúc 17h",
        userName: "Vinh"
    },
    {
        avatar:
            "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
        isRemove: true,
        content: "32. Đi gym",
        createAt: "32-12-2023",
        isDone: false,
        description: "Đi gym lúc 17h",
        userName: "Vinh"
    },
    {
        avatar:
            "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
        isRemove: true,
        content: "33. Đi gym",
        createAt: "33-12-2023",
        isDone: true,
        description: "Đi gym lúc 17h",
        userName: "Vinh"
    },
];


function App() {
    return (<div className="todo" style={{display: "grid"}}>
            <Title></Title>
            <ListMenu></ListMenu>
            <TaskView>
                <div>
                    {arrayTask.map((each) => {
                        return <Task avatar={each.avatar} isRemove={each.isRemove} content={each.content} createAt={each.createAt} isDone={each.isDone} description={each.description} userName={each.userName}/>;
                    })}
                </div>
            </TaskView>
        </div>
    );

}

export default App;