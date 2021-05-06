import React, { Component } from "react";
import Entry from "./entry";
import { DOMAIN } from "../../store/utils";
import axios from "axios";
import { Typography } from "@material-ui/core";

export default class index extends Component {
  state = {
    loading: true,
    creator: null,
    creator_name: null,
  };

  componentDidMount() {
    axios({
      url: `${DOMAIN}/improvements/creators/?uuid=${this.props.match.params.creator_id}`,
    })
      .then((res) => {
        let data = res.data.output;
        if (!data.length) {
          window.location.replace("/");
        }
        this.setState({
          loading: false,
          creator_name: data[0].name,
          creator: data[0].id,
        });
      })
      .catch((err) => {
        window.location.replace("/");
      });
  }
  render() {
    return this.state.loading ? <Typography align="center" style={{ paddingTop:"100px" }}>Loading...</Typography> : <Entry {...this.state} />;
  }
}
