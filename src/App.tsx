import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
};

export default App;
