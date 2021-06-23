import React from "react";
import Routes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";

import "@elastic/react-search-ui-views/lib/styles/styles.css";
import '@elastic/eui/dist/eui_theme_light.css';
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
        <Routes />
      </BrowserRouter>
  );
}
