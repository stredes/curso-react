import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { MyAwesomeApp } from "./MyAwesomeApp";
import { FirstStepsApp } from "./FirstStepApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirstStepsApp />
  </StrictMode>,
);
