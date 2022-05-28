import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Login from "./screens/Login";
import Register from "./screens/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/all" element={<Product />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
