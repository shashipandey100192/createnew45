// Heading Component/ Can be used a breaker
//  Instructions 
// variants: primary, danger
// content = Your message which will display as heading

import React from "react";
import "../coreUI/global.css";

export default function Heading(props) {
  let color = "grey";
  let background = "white";

  if (props.variant === "danger") {
    color = 'white'
    background = 'tomato'
  } else if (props.variant === "primary") {
    color = 'white'
    background = 'dodgerblue'
  }

  return (
    <h1
      style={{
        color: `${color}`,
        fontSize: `1.3rem`,
        fontWeight: '400',
        backgroundColor: `${background}`,
        padding: `1.3rem`,
        margin: `.5rem 0px`,
        boxShadow: `0px 2px 2px rgba(0,0,0,0.21), 0px -2px 2px rgba(0,0,0,0.21)`,
        userSelect: `none`,
        textAlign: 'center'
      }}
    >
      {props.content}
    </h1>
  );
}

Heading.defaultProps = {
  content: "Default Heading content",
  variant: "",
};
