import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import TestPage from "./pages/TestPage";
import Loading from "./pages/ResultLoading";
import { TestResult1 } from "./pages/TestResult1";
import { TestResult2 } from "./pages/TestResult2";
import { TestResult3 } from "./pages/TestResult3";
import { TestResult4 } from "./pages/TestResult4";
import { TestResult5 } from "./pages/TestResult5";
import { TestResult6 } from "./pages/TestResult6";
import { TestResult7 } from "./pages/TestResult7";
import { TestResult8 } from "./pages/TestResult8";
import KakaoShareButton from "./pages/Kakao";
import { Frame } from "./pages/Frame";
import Login from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test/:step" element={<TestPage />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/one" element={<TestResult1 />} />
        <Route path="/two" element={<TestResult2 />} />
        <Route path="/three" element={<TestResult3 />} />
        <Route path="/four" element={<TestResult4 />} />
        <Route path="/five" element={<TestResult5 />} />
        <Route path="/six" element={<TestResult6 />} />
        <Route path="/seven" element={<TestResult7 />} />
        <Route path="/eight" element={<TestResult8 />} />
        <Route path="/nine" element={<Frame />} />
        <Route path="/ten" element={<KakaoShareButton/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
