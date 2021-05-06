import { useEffect, useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { WhatsApp } from "@material-ui/icons";
import Entries from "./entries";
import { DOMAIN, FRONTEND_URL } from "../../store/utils";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 10px",
    minWidth: "300px",
  },
  whatsapp: {
    margin: "40px 0px",
    backgroundColor: "#099080",
    "&:hover": {
      backgroundColor: "#099080",
    },
  },
}));

export default function Index(props) {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    axios({
      url: `${DOMAIN}/improvements/entries/`,
      method: "GET",
      params: {
        token: props.token,
      },
    })
      .then((res) => {
        setEntries(res.data.output);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [props.token]);

  return (
    <Container maxWidth="xs">
      <div className={classes.root}>
        <Typography variant="h4" align="center">
          🎉 Hi {props.name}🎉
        </Typography>
        <Typography align="center">
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.whatsapp}
            onClick={() => {
              let URL = `whatsapp://send?text=Do you have a 💬 *secret message* 💬 for me? or, What you think 🤔 I need to Improve in myself? Let me know 🤫 *Anonymously* 🤫 at 👉👉 ${FRONTEND_URL}/entry/${props.uuid} 👈👈 Isn't this a 🎉 *Fun* 🎉 way of *Sharing Secrets*? 🤫`;
              window.location.replace(URL);
            }}
            startIcon={<WhatsApp />}
          >
            Share
          </Button>
        </Typography>
        <Typography variant="h6" align="left">
          {entries.length} Friends {entries.length === 0 ? null : "🤩🤩"}
        </Typography>
        <br />
        {loading ? (
          <>
            <br />
            <Typography align="center">Loading...</Typography>
          </>
        ) : (
          <Entries entries={entries} />
        )}
      </div>
    </Container>
  );
}
