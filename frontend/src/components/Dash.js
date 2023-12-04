import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const Dash = () => {
  const [dimns, setDimns] = useState([0, 0]);

  useEffect(() => {
    const lnav = document.getElementById("minhabarra")?.clientHeight;
    const win = window.innerHeight;
    setDimns([lnav, win]);
  }, []);

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
        <Row className="justify-content-center">
          <Col md={3}>
            <motion.div
              className="hero-in"
              initial={{ opacity: 0, y: 20, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="icon-box">
                {/* <div className="icon">
                  <i className="ri-stack-line"></i>
                </div> */}
                <h4 className="title">
                  <a href="/frontend/mapas">Mapas</a>
                </h4>
                <p className="description">
                  Acompanhe a favorabilidade de ocorrência de hoje e de datas
                  anteriores.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div
              className="hero-in"
              initial={{ opacity: 0, y: 20, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1.25, delay: 0.1 }}
            >
              <div className="icon-box">
                {/* <div className="icon">
                  <i className="ri-stack-line"></i>
                </div> */}
                <h4 className="title">
                  <a href="/frontend/">O modelo</a>
                </h4>
                <p className="description">
                  Entenda as projeções. Informações sobre o modelo utilizado e a
                  metodologia adotada.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div
              className="hero-in"
              initial={{ opacity: 0, y: 20, x: -10 }}
              animate={{ opacity: 1, y: 0, x: -0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              <div className="icon-box">
                {/* <div className="icon">
                  <i className="ri-stack-line"></i>
                </div> */}
                <h4 className="title">
                  <a href="/frontend/">Publicações</a>
                </h4>
                <p className="description">
                  Acompanhe aqui as publicações científicas.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Dash;
