import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#23272b",
    color: "#fff",
    minHeight: "100vh",
  },
}));

export default function Layout(props) {
  const classes = useStyles();

  return <div className={classes.root}>{props.children}</div>;
}
