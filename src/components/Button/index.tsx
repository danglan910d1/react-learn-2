import  MButton, { ButtonProps } from "@mui/material/Button";
import { styled } from '@mui/material/styles';

const CustomButton = styled(MButton)({
}) as typeof MButton;

interface TButtonProps extends ButtonProps {
}

export const Button = (props:TButtonProps) => {
  return <CustomButton {...props}></CustomButton>
};

export default Button;