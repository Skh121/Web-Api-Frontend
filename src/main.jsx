import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer,Slide } from "react-toastify";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      theme="dark"
      transition={Slide}
    />
    </QueryClientProvider>
  </StrictMode>
);
