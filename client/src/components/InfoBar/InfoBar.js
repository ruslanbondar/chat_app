import React from "react";
import onlineIcon from "../../icons/online.svg";
import closeIcon from "../../icons/close.svg";
import styles from "./InfoBar.module.css";

const InfoBar = ({ room }) => (
  <div className={styles.infoBar}>
    <div className={styles.leftInnerContainer}>
      <img className={styles.onlineIcon} src={onlineIcon} alt="" />
      <h3>{room}</h3>
    </div>
    <div className={styles.rightInnerContainer}>
      <a href="/">
        <img className={styles.closeIcon} src={closeIcon} alt="" />
      </a>
    </div>
  </div>
);

export default InfoBar;
