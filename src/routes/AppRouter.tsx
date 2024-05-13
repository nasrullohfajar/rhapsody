import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Notification from "@/pages/Notification";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}></Route>
      <Route path="/home" element={<Home />} />

      <Route path="/notifications" element={<Notification />} />
    </Routes>
  );
};

export default AppRouter;
