import React from "react";
import LogIn from "../pages/LogIn";
import Employees from "../pages/Employees";
import Drop from "../pages/Drop";
import Protect from "../pages/Protected";
import Header from "../organism/Header";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route
          path="/employees"
          element={
            <Protect>
              <Employees />
            </Protect>
          }
        />
        <Route
          path="/upload"
          element={
            <Protect>
              <Drop />
            </Protect>
          }
        />
        <Route
          path="*"
          element={
            <Protect>
              <Navigate to="/employees" replace />
            </Protect>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
