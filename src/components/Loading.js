import React from "react";
import loader from "../assets/gif/spinner.gif";
import Styles from "../components/Landing.module.css";

function Loading(props) {
  return (
    <div className={Styles.loader}>
      <img src={loader} alt="loading"></img>
    </div>
  );
}

export default Loading;
