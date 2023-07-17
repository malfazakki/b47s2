/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./context/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { PaymentContextProvider } from "./context/PaymentContext";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <QueryClientProvider client={client}>
          <PaymentContextProvider>
            <App />
          </PaymentContextProvider>
        </QueryClientProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
