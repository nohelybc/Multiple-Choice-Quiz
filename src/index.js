import React from "react";
import ReactDOM from "react-dom/client";
import { MultipleChoiceQuiz } from "./components/MultipleChoiceQuiz";

import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MultipleChoiceQuiz />
  </React.StrictMode>
);
