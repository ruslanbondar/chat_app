import React from "react";
import styles from "./Message.module.css";
import ReactEmoji from "react-emoji";
import { Badge } from "react-bootstrap";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={`${styles.messageContainer} ${styles.justifyEnd}`}>
      <Badge
        style={{ background: "none", color: "#828282a8", fontWeight: "400" }}
      >
        {trimmedName}
      </Badge>
      <Badge
        style={{
          padding: "10px 14px 12px",
          borderRadius: "14px",
          fontSize: "18px",
          background: "#37adb1a8",
          color: "#fff"
        }}
      >
        {ReactEmoji.emojify(text)}
      </Badge>
    </div>
  ) : (
    <div className={`${styles.messageContainer} ${styles.justifyStart}`}>
      <Badge
        style={{
          padding: "10px 14px 12px",
          borderRadius: "14px",
          fontSize: "18px",
          background: "#828282a8",
          color: "#fff"
        }}
      >
        {ReactEmoji.emojify(text)}
      </Badge>
      <Badge
        style={{ background: "none", color: "#828282a8", fontWeight: "400" }}
      >
        {user}
      </Badge>
    </div>
  );
};

export default Message;
