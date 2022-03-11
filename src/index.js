import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import ReactPixel from "react-facebook-pixel";

import "./index.css";
import App from "./App";

ReactGA.initialize('UA-152908617-1');
TagManager.initialize({gtmId: 'GTM-5GMLPLH'});
ReactPixel.init('343093872945766');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("home")
);
