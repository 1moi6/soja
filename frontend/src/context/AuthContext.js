import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Spinner from "react-bootstrap/Spinner";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const BaseUrl = "http://127.0.0.1:8000/auth";

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const LocalToken = (locth) => {
    let usera = {};
    if (locth) {
      const tokens = JSON.parse(locth);
      let decoded = jwtDecode(tokens.access);
      usera = {
        email: decoded.email,
        nome: decoded.nome,
        sobrenome: decoded.sobrenome,
      };
    } else {
      usera = {
        email: null,
        nome: null,
        sobrenome: null,
      };
    }
    return usera;
  };

  const [authtokens, setAuthtokens] = useState(
    localStorage.getItem("authtokens")
      ? JSON.parse(localStorage.getItem("authtokens"))
      : null
  );
  const [user, setUser] = useState(
    LocalToken(localStorage.getItem("authtokens"))
  );

  async function getToken(nome, senha) {
    const postData = {
      username: nome,
      password: senha,
    };
    const res = await fetch(BaseUrl + "/api/token/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const tokens = await res.json();
    if (res.status === 200) {
      localStorage.setItem("authtokens", JSON.stringify(tokens));
      let decoded = jwtDecode(tokens.access);
      setUser({
        email: decoded.email,
        nome: decoded.nome,
        sobrenome: decoded.sobrenome,
      });
      setAuthtokens(tokens);
      navigate("/frontend/");
    }
  }

  const FazLogin = (e) => {
    e.preventDefault();
    const nome = document.getElementsByName("username")[0].value;
    const senha = document.getElementsByName("password")[0].value;
    try {
      getToken(nome, senha);
    } catch (error) {
      console.error(error.message);
    }
  };

  const Logout = (e) => {
    e.preventDefault();
    setUser({
      email: null,
      nome: null,
      sobrenome: null,
    });
    setAuthtokens(null);
    navigate("/frontend/");
    localStorage.removeItem("authtokens");
  };

  useEffect(() => {
    if (authtokens) {
      let decoded = jwtDecode(authtokens.access);
      setUser({
        email: decoded.email,
        nome: decoded.nome,
        sobrenome: decoded.sobrenome,
      });
      setLoading(false);
    }
  }, [loading, authtokens]);

  return (
    <AuthContext.Provider
      value={{
        // esp_livre,
        user,
        FazLogin,
        setUser,
        Logout,
        authtokens,
        setAuthtokens,
      }}
    >
      {loading ? <Spinner animation="grow" /> : children}
    </AuthContext.Provider>
  );
};
