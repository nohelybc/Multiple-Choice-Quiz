import React, { useState } from "react";
import { quizzes } from "../quizzes";

export const MultipleChoiceQuiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);

  const quiz = quizzes[currentQuiz];

  return <div>Hello world!</div>;
};
