import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Apps from "./Homepage/Apps";

const App = lazy(() => import("./App"));

const rootElement = document.getElementById("root");

function AppLoader() {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <App />
    </Suspense>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppLoader />
    <Apps />
  </React.StrictMode>,
  rootElement
);
