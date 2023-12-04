import React from "react";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Login from "./Login";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import Dash from "./Dash";

function Home() {
  const [dimns, setDimns] = useState([0, 0]);

  useEffect(() => {
    const lnav = document.getElementById("minhabarra")?.clientHeight;
    const win = window.innerHeight;
    setDimns([lnav, win]);
    console.log(lnav, win);
  }, []);

  const { user } = useContext(AuthContext);

  return (
    <Container>
      <div
        id="hero"
        className="d-flex justify-content-center"
        style={{
          display: "flex",
          height: `${dimns[1] - dimns[0]}px`,
          alignItems: "center",
        }}
      >
        <motion.div
          className="hero-in"
          initial={user.email ? { opacity: 0, y: 10 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={user.email ? { duration: 1.5 } : { duration: 1.5 }}
          key={user.email}
        >
          <Dash />
        </motion.div>
      </div>
    </Container>
  );
}

export default Home;
