//external Lib  imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreatePage from "../pages/CreatePage";
import ProductPage from "../pages/ProductPage";
import UpdatePage from "../pages/UpdatePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />}></Route>
      <Route path="/create-product" element={<CreatePage />}></Route>
      <Route path="/update-product/:id" element={<UpdatePage />}></Route>
    </Routes>
  );
}

export default AppRoutes;
