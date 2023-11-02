import AddIcon from "@mui/icons-material/Add";
import {styled} from "@mui/material/styles";

const CustomAddButton = styled('button')`
  background:  #8E49E8;  
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
`
const ButtonIcon = () => {
  return <CustomAddButton>
    <AddIcon fontSize={"large"}></AddIcon>
  </CustomAddButton>
};

export default ButtonIcon;
