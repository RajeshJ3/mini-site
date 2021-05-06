import Dash from "./dash";
import React, { Component } from "react";

export default class index extends Component {
  state = {
    loading: true,
    improvements: null,
  };

  componentDidMount() {
    let improvements = localStorage.getItem("improvements");
    if (!improvements) {
      window.location.replace("/");
    }
    try {
      improvements = JSON.parse(improvements);
      this.setState({
        loading: false,
        improvements: improvements,
      });
    } catch {
      window.location.replace("/");
    }
  }
  render() {
    return this.state.loading ? null : <Dash {...this.state.improvements} />;
  }
}
