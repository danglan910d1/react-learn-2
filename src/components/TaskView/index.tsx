import { styled } from '@mui/material/styles';
import MBox, {BoxProps} from '@mui/material/Box';

const CustomBox = styled(MBox) ({
    width: "100%",
    height: "100%",
    position: "relative",
    top: "-500px"
}) as typeof MBox


interface TaskViewProps extends BoxProps {}

const TaskView = (props:TaskViewProps) => {
    return <CustomBox {...props}></CustomBox>
}

export default TaskView;

