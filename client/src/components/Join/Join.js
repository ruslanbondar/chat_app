import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Join.module.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div>
          <InputGroup className="mb-3">
            <FormControl
              style={{ height: "50px" }}
              placeholder="Name"
              aria-describedby="basic-addon1"
              onChange={e => setName(e.target.value)}
            />
          </InputGroup>
        </div>

        <div>
          <InputGroup className="mb-3">
            <FormControl
              style={{ height: "50px" }}
              placeholder="Room"
              aria-describedby="basic-addon1"
              onChange={e => setRoom(e.target.value)}
            />
          </InputGroup>
        </div>

        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button className={styles.btButton} variant="primary" type="submit">
            SIGN IN
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
