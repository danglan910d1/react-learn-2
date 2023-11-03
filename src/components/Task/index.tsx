import { styled } from '@mui/material/styles';
import MBox from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

const CustomBox = styled(MBox) ({
    border: "solid 0.0125rem rgba(245,245,243,255)",
    height: "80px",
    borderRadius: "7px",
    background: "rgba(255,255,255,255)",
    display: "flex",
    width: "100%",
    fontFamily: "Inter",
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    position: "relative",
})

const CustomTask = styled(MBox) ({
    width: "10%",
    textAlign: "left",
    marginBottom: "20px",
    marginLeft: "10px",
})

const CustomTime = styled(MBox) ({
    width: "30%",
    marginLeft: "385px",

})

const CustomStatus = styled(MBox) ({
    marginLeft: "5px",
    color: "green"
})

const CustomAvatar = styled(MBox) ({
    width: "63px",
    height: "63 px",
    '& img': {
        width: '100%',
        height: '100%',
        borderRadius: "50%",
    },
    marginLeft: "170px",
    cursor: "pointer",

})

const CustomMenuIcon = styled(MBox) ({
    '& svg': {
        fontSize: '45px',
        color: "#6a7375"
    },
    cursor: "pointer",
})

const CustomDescription = styled(MBox) ({
    fontSize: "12px",
    position: "absolute",
    marginLeft: "30px",
    color: "#616565",
})

const Task = (props: {avatar: string , isRemove: boolean,  content: string, createAt: string, isDone: boolean, description: string, userName: string }) => {
    const { avatar, isRemove, content, createAt, isDone,description, userName} = props;
    return (
        isRemove ?
        null :
            <div>
                <CustomBox>
                    <CustomTask>
                        <p>{content}</p>
                        <CustomDescription>
                            {description}
                        </CustomDescription>
                    </CustomTask>
                    <CustomTime>
                        <p>{createAt}</p>
                    </CustomTime>
                    <CustomStatus>
                        {isDone ? <CheckCircleIcon /> : <DoNotDisturbOnIcon style={{color:"red"}}/>}
                    </CustomStatus>
                    <CustomAvatar>
                        <img src={avatar} title={userName} alt={""}/>
                    </CustomAvatar>
                    <CustomMenuIcon>
                        <MoreVertIcon></MoreVertIcon>
                    </CustomMenuIcon>
                </CustomBox>
            </div>
    );
  };


export default Task;
