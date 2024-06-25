import React from "react";
import ReactDOM from "react-dom/client";
// import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <AuthProvider> */}
        <App />
      {/* </AuthProvider> */}
    </React.StrictMode>
    ,
  </BrowserRouter>
);
