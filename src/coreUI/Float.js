import React, { Fragment } from "react";
import './float.css'

export default function Float() {
  return (
    <Fragment>
      <div className="centered">
        <div className="main">
          <div className="carpet absolute carpet-width">
            <p className="text absolute">CSS is Awesome</p>
          </div>
          <div className="shadow absolute carpet-width"> </div>
        </div>
      </div>
    </Fragment>
  );
}
