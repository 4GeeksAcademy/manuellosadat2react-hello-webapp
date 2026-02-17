import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import { StoreProvider } from "./hooks/useGlobalReducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StoreProvider>
);
