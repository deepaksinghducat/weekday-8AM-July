import React from "react";
import { Fragment } from "react";
import Modal from "./Modal";
import ReactDOM  from "react-dom";

function Parent() {
  return (
    <Fragment>
      <div>fdassaf</div>
      {
		ReactDOM.createPortal(<Modal />, document.getElementById('upper-root'))
	  }
    </Fragment>
  );
}

export default Parent;
