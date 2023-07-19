/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./context/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <QueryClientProvider client={client}>
            <App />
        </QueryClientProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
