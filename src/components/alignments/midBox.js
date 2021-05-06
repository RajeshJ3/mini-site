import React from "react";

export default function MidBox(props) {
  return (
    <div
      style={{
        height: props.height ? props.height : "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          margin: props.margin ? props.margin : "0",
          position: "absolute",
          top: props.top ? props.top : "50%",
          left: props.left ? props.left : "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
