import { FaUserAlt, FaLock } from "react-icons/fa";
import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

function LoginComponente() {
  const { FazLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dimns, setDimns] = useState([0, 0]);

  useEffect(() => {
    const lnav = document.getElementById("minhabarra")?.clientHeight;
    const win = window.innerHeight;
    setDimns([lnav, win]);
  }, []);

  return (
    <Container>
      <div
        className="d-flex justify-content-center"
        style={{
          display: "flex",
          height: `${dimns[1] - dimns[0]}px`,
          alignItems: "center",
        }}
      >
        <div>
          <Row className="justify-content-center mt-1">
            <Col md={12}>
              <div className="input-group mb-1">
                <span className="input-group-text" id="basic-addon1">
                  <FaUserAlt />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Usuário"
                  name="username"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-1">
            <Col md={12}>
              <div className="input-group mb-1">
                <span className="input-group-text" id="basic-addon1">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Senha"
                  name="password"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-3">
            <Col md={12}>
              <button
                type="submit"
                className="btn btn-outline-primary w-100 mb-2"
                onClick={FazLogin}
              >
                Acessar
              </button>
              <p
                className="w-100"
                style={{ wordWrap: "break-word", overflowX: "auto" }}
              >
                Entre com credenciais válidas para obter acesso
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default LoginComponente;
