import { styled } from '@mui/material/styles';
import MMenuTable, {TableHeadProps} from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell) ({
    [`&.${tableCellClasses.head}`]: {
        color: "rgba(71,71,71,255)",
    },
    fontSize: "15px",
});

const TaskCell = styled(StyledTableCell)({
    width: "60%",
    paddingLeft: "30px",
});

const OtherCell = styled(StyledTableCell)({
    width: "20%"
});


const CustomMenuItem = styled(MMenuTable) ({
    textDecoration: "none",
    marginBottom: "490px",
}) as typeof MMenuTable;


interface ListItemProp extends TableHeadProps {}

const ListMenu = (props:ListItemProp) => {
    return <CustomMenuItem {...props}>
            <TaskCell>Task </TaskCell>
            <OtherCell>Create Date</OtherCell>
            <OtherCell>Status</OtherCell>
            <OtherCell style={{paddingRight:"49px"}}>Assign</OtherCell>
    </CustomMenuItem>
}

export default ListMenu;