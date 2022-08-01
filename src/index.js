import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Quiz from "./components/Quiz";

function Main() {
  return (
    <div className="main">
      <Quiz />
    </div>
  );
}

let reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<Main />);
