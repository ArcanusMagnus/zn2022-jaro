import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import ReactGA from "react-ga";
// import TagManager from "react-gtm-module";
// import ReactPixel from "react-facebook-pixel";

import "./index.css";
import App from "./App";

// ReactGA.initialize('UA-152908617-1');
// TagManager.initialize({gtmId: 'GTM-M9LSVR5'});
// ReactPixel.init('343093872945766');
const home = document.getElementById("home");
const root = createRoot(home!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
