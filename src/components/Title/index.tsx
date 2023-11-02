import {styled} from "@mui/material/styles";
import MTypo, {TypographyProps} from "@mui/material/Typography";

const CustomTypo = styled(MTypo)({
  fontFamily: '"Poppins", sans-serif',
  fontWeight: "bold",
  textAlign: "center",
  color: "black",
  marginTop: 0,
  display: `flex`,
  marginBottom: `10px`
}) as typeof MTypo;

interface TitleProps extends TypographyProps {}

const Title = (props: TitleProps) => {
  return <CustomTypo variant={"h4"} {...props}>ToDo App</CustomTypo>;
}

export default Title
