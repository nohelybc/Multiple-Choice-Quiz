import React from "react";
import { getMessage } from "../messages";

export const Score = (props) => {
  return (
    <div>
      <h2> {props.quizTitle} </h2>
      <h3>
        You got <span>{props.totalCorrect}</span> out of{" "}
        <span>{props.totalQuestions}</span> right.
      </h3>
      <div>{getMessage()}</div>
      <h3>Your answers: </h3>
      <ol className="questions">{props.renderScoreData()}</ol>
      <button className="btn btn-primary" onClick={props.takeNextQuiz}>
        Next Quiz
      </button>
    </div>
  );
};
