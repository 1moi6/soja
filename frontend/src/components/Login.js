import { FaUserAlt, FaLock } from "react-icons/fa";
import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

import { Row, Col } from "react-bootstrap";
function Login() {
  const { FazLogin } = useContext(AuthContext);
  return (
    <div>
      <Row className="justify-content-center mt-1">
        <Col md={8}>
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
        <Col md={8}>
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
        <Col md={8}>
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
  );
}

export default Login;
