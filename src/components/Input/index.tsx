import {styled} from "@mui/material/styles";
import MInput, {InputBaseProps} from "@mui/material/InputBase";

const CustomInput = styled(MInput)({
  fontFamily: '"Poppins", sans-serif',
  fontWeight: "lighter",
  textAlign: "center",
  color: "gray",
  border: `1px solid #ccc`,
  borderRadius: `3px`,
  width: `90%`,
  marginRight: `5px`,
  paddingLeft: `5px`
}) as typeof MInput;

interface InputProps extends InputBaseProps {}

const Input = (props: InputProps) => {
  return <CustomInput defaultValue={"Add your new todo"} {...props}></CustomInput>;
};

export default Input;
