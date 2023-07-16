import React from "react";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./context/UserContext";
import { PaymentContextProvider } from "./context/PaymentContext";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <PaymentContextProvider>
        <App />
      </PaymentContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
