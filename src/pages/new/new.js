import { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MidBox from "../../components/alignments/midBox";
import { DOMAIN } from "../../store/utils";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "280px",
  },
  branding: {
    marginTop: "25px",
    color: "#f2f2f2",
    fontWeight: "300",
  },
  textField: {
    border: "none",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  continueButtonWrapper: {
    marginTop: "50px",
  },
  continueButton: {
    cursor: "pointer",
    border: "none",
    backgroundColor: "#7289da",
    padding: "12px 32px",
    minWidth: "190px",
    borderRadius: "28px",
    fontSize: "20px",
    fontWeight: "400",
  },
  continueButtonDisabled: {
    border: "none",
    backgroundColor: "#aebbea",
    color: "#666666",
    minWidth: "190px",
    padding: "12px 32px",
    borderRadius: "28px",
    fontSize: "20px",
    fontWeight: "400",
  },
}));

export default function Index(props) {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      url: `${DOMAIN}/improvements/creators/`,
      method: "POST",
      data: {
        name,
        email,
      },
    })
      .then((res) => {
        localStorage.setItem("improvements", JSON.stringify(res.data.output));
        window.location.replace("/dashboard");
      })
      .catch((err) => {
        console.log(err.request);
        setLoading(false);
      });
  };

  return (
    <MidBox top="42%">
      <div className={classes.root}>
        <Typography variant="h5" align="center">
          🎉Let the Fun Begin🎉
        </Typography>
        <Typography variant="body1" align="center" className={classes.branding}>
          Fill the following form, and You are <b>good to go</b> 🏃
        </Typography>
        <br />
        <br />
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            className={classes.textField}
            color="primary"
            required
            variant="outlined"
            type="text"
            placeholder="Name"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <TextField
            fullWidth
            className={classes.textField}
            color="primary"
            type="email"
            variant="outlined"
            placeholder="Email (optional)"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Typography align="center" className={classes.continueButtonWrapper}>
            {loading ? (
              <button disabled className={classes.continueButtonDisabled}>
                Submitting
              </button>
            ) : (
              <button type="submit" className={classes.continueButton}>
                Submit
              </button>
            )}
          </Typography>
        </form>
      </div>
    </MidBox>
  );
}
