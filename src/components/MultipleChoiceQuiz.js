import React, { useState } from "react";
import { Question } from "./Question";
import { Choices } from "./shuffleChoice";
import { Score } from "./score";
import { quizzes } from "../quizzes";

export const MultipleChoiceQuiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);

  const quiz = quizzes[currentQuiz];

  return <div>Hello world!</div>;
};
