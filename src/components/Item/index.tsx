import {styled} from "@mui/material/styles";
import MItem, { BoxProps } from "@mui/material";

const CustomItem = styled(MItem)

interface ItemProps extends BoxProps {}

const Item = (props:ItemProps) => {
    return <CustomItem {...props}></CustomItem>
}

export default Item;
