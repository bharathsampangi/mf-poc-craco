import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Data from "./Data";
import Home from "./home";

// let history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mftest" element={<Home />} />
        <Route path="/mftest/users" element={<Users />} />
        <Route path="/mftest/data" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);