import {styled} from "@mui/material/styles";
import MTypo, {TypographyProps} from "@mui/material/Typography";

const CustomTypo = styled(MTypo)({
  fontFamily: '"Poppins", sans-serif',
  fontWeight: "bolder",
  textAlign: "center",
  color: "rgba(68,68,68,255)",
  marginTop: 0,
  marginBottom: `10px`,
  textAlignLast: "left",
  fontSize: "25px",
}) as typeof MTypo;

interface TitleProps extends TypographyProps {}

const Title = (props: TitleProps) => {
  return <CustomTypo variant={"h4"} {...props}>Task Board</CustomTypo>;
}

export default Title
