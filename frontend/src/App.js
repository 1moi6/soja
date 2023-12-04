import React from "react";
import "./App.css";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import LoginComponente from "./components/LoginComponente";
import UploadImage from "./components/UploadImage";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/frontend/" element={<NavBar />}>
            <Route path="/frontend/" element={<Home />} />
            <Route path="/frontend/login" element={<LoginComponente />} />
            <Route path="/frontend/mapa/upload" element={<UploadImage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
