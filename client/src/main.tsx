import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Home from "./components/Home/Home";
import GetStarted from "./components/Home/GetStarted";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* generic routes */}
        <Route path="/" element={<Home />} />
        <Route path="/getStarted" element={<GetStarted />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  </StrictMode>
);
