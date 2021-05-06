import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MidBox from "../../components/alignments/midBox";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 10px",
    minWidth: "300px",
  },
  branding: {
    marginTop: "25px",
    color: "#f2f2f2",
    fontWeight: "300",
  },
  emoji: {
    marginTop: "20px",
  },
  continueButtonWrapper: {
    marginTop: "50px",
  },
  continueButton: {
    backgroundColor: "#7289da",
    padding: "16px 32px",
    borderRadius: "28px",
    fontSize: "20px",
    fontWeight: "400",
  },
}));

export default function Index(props) {
  const classes = useStyles();

  return (
    <MidBox top="45%">
      <div className={classes.root}>
        <Typography variant="h4" align="center">
          🎉Welcome🎉
        </Typography>
        <Typography variant="body1" align="center" className={classes.branding}>
          Get <b>Improvements Tips </b>✅ From Friends 🤫 Anonymously
        </Typography>
        <Typography variant="h2" align="center" className={classes.emoji}>
          😜
        </Typography>
        <Typography align="center" className={classes.continueButtonWrapper}>
          <Link to="/new" className={classes.continueButton}>
            Continue
          </Link>
        </Typography>
      </div>
    </MidBox>
  );
}
