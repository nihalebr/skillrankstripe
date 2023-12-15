import React, { StrictMode } from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import { LoginContextProvider } from "./context/LoginContext";
import {
  RouterProvider,
  createBrowserRouter as Router,
} from "react-router-dom";

import { ThemeProvider } from "@material-tailwind/react";

const router = Router([{ path: "*", Component: App }]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ThemeProvider>
      <LoginContextProvider>
        <RouterProvider router={router} />
      </LoginContextProvider>
    </ThemeProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
