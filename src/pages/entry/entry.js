import { useState } from "react";
import { Container, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MidBox from "../../components/alignments/midBox";
import { DOMAIN } from "../../store/utils";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
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
  successMessage: {
    color: "green",
  },
  subtitle: {
    color: "#a6a6a6",
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
}));

export default function Index(props) {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      url: `${DOMAIN}/improvements/entries/`,
      method: "POST",
      data: {
        name,
        creator: props.creator,
        data: message,
      },
    })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err.request);
        setLoading(false);
      });
  };

  return (
    <MidBox top="45%">
      <Container maxWidth="xs">
        <div className={classes.root}>
          <Typography variant="h6" align="center">
            {props.creator_name} will never know 🤫
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.branding}
          >
            What you'll suggest {props.creator_name} to 🎉 improve? Your message
            will be <b>ANONYMOUS</b> 🤫 always.
          </Typography>
          <br />
          <br />
          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              className={classes.textField}
              color="primary"
              variant="outlined"
              type="text"
              placeholder="Secret Name (optional)"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <TextField
              fullWidth
              multiline
              rows={7}
              className={classes.textField}
              color="primary"
              type="text"
              variant="outlined"
              required
              placeholder="Your Secret Message"
              size="small"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Typography
              align="center"
              className={classes.continueButtonWrapper}
            ></Typography>
            {success ? (
              <>
                <Typography variant="subtitle1" align="center">
                  Your Message is{" "}
                  <span className={classes.successMessage}>Successfully </span>
                  sent to <b>{props.creator_name}</b>.
                  <br />
                </Typography>
                <Typography
                  variant="subtitle2"
                  align="center"
                  className={classes.subtitle}
                >
                  Know what your firends have in their mind about you.
                </Typography>
                <Typography
                  align="center"
                  className={classes.continueButtonWrapper}
                >
                  <Link to="/new" className={classes.continueButton}>
                    Get Started
                  </Link>
                </Typography>
              </>
            ) : loading ? (
              <Typography align="center">
                <button disabled className={classes.continueButtonDisabled}>
                  Sending
                </button>
              </Typography>
            ) : (
              <Typography align="center">
                <button type="submit" className={classes.continueButton}>
                  Send
                </button>
              </Typography>
            )}
          </form>
        </div>
      </Container>
    </MidBox>
  );
}
