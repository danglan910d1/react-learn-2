import AcUnitIcon from "@mui/icons-material/AcUnit";
import AddLinkIcon from "@mui/icons-material/AddLink";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { OutlinedInput } from "@mui/material";

const Vinh = () => {
  return (
    <div>
      c3
      <AcUnitIcon></AcUnitIcon>
      <AddLinkIcon />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <OutlinedInput />
    </div>
  );
};

export default Vinh;
