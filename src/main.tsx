import "@solana/wallet-adapter-react-ui/styles.css";

import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
