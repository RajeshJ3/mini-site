import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import moment from "moment";

const useStyles = makeStyles({
  root: {},
});

function Row(props) {
  const { row, index } = props;
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <b>{index + 1}</b>
        </TableCell>
        <TableCell align="right">
          {moment(row.created_at).format("LT")}
        </TableCell>
        <TableCell align="right">
          {moment(row.created_at).format("LL")}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="body1">
                {row.name ? (
                  <>
                    {row.name}, <br />
                    <br />
                  </>
                ) : null}{" "}
                <div dangerouslySetInnerHTML={{ __html: row.data }}></div>
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function TableItem(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Sr. no.</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.entries.map((row, index) => (
            <Row key={index} row={row} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
