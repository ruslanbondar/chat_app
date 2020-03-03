import React from "react";
import onlineIcon from "../../icons/online.svg";
import styles from "./TextContainer.module.css";

const TextContainer = ({ users }) => (
  <div className={styles.textContainer}>
    {users ? (
      <div>
        <h1>Online:</h1>
        <div className={styles.activeContainer}>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className={styles.activeItem}>
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
