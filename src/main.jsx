import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LudoContextProvider } from "./context/ludoContect.jsx";

createRoot(document.getElementById("root")).render(
  <LudoContextProvider>
    <App />
  </LudoContextProvider>
);
