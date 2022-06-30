// Third party libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Shared internal imports
import { App } from "containers";
import { InjectGlobalStyles } from "themes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <InjectGlobalStyles />
    <App />
  </React.StrictMode>
);
