import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import TestPage from "./pages/TestPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test/:step" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
