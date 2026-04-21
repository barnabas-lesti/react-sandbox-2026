import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const { App } = await import("./app/App");

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
