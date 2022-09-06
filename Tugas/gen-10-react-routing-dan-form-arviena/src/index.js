import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Biodata from "./pages/Biodata";
import Home from "./pages/Home";
import PlayerList from "./pages/PlayerList";
import DetailPemain from "./pages/DetailPemain";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="biodata" element={<Biodata />} />
        <Route path="player-list" element={<PlayerList />} />
        <Route path="detail-pemain/:namapemain" element={<DetailPemain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
