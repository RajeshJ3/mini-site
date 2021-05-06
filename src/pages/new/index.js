import React, { Component } from "react";
import New from "./new";

export default class index extends Component {
  state = {
    loading: true,
    improvements: null,
  };

  componentDidMount() {
    let improvements = localStorage.getItem("improvements");
    if (improvements) {
      window.location.replace("/dashboard");
      try {
        improvements = JSON.parse(improvements);
        window.location.replace("/dashboard");
      } catch {
        localStorage.removeItem("improvements");
        window.location.replace("/new");
      }
    }
    this.setState({
      loading: false,
      improvements: improvements,
    });
  }
  render() {
    return this.state.loading ? null : <New />;
  }
}
