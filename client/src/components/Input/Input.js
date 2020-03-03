import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import styles from "./Input.module.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <div className={styles.form}>
    <InputGroup className="mb-3">
      <FormControl
        style={{ height: "50px" }}
        placeholder="Your message..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <InputGroup.Append>
        <Button
          onClick={e => sendMessage(e)}
          style={{ background: "#8ab3fa", width: "100px" }}
        >
          Send
        </Button>
      </InputGroup.Append>
    </InputGroup>
  </div>
);

export default Input;
