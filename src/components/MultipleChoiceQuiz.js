import React, { useState } from "react";
import { Question } from "./Question";
import { Choices } from "./ShuffleChoice";
import { Score } from "./Score";
import { quizzes } from "../quizzes";

export const MultipleChoiceQuiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);

  const quiz = quizzes[currentQuiz];
  const questions = quizzes[currentQuiz].questions;

  const handleClick = (evt) => {
    setCurrentAnswer(evt.target.innerText);
    setShowNext(true);

    if (evt.target.innerText === questions[currentQuestion].correctAnswer) {
      setIsCorrect(true);
      setTotalCorrect(totalCorrect + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const renderScoreResult = (question, answer) => {
    if (question.correctAnswer === answer.currentAnswer) {
      return <span className="correct">{answer.currentAnswer}</span>;
    }
    return <span className="incorrect">{answer.currentAnswer}</span>;
  };

  const renderScoreData = () => {
    return answers.map((answer, index) => {
      const question = questions.find(
        (question, idx) => idx === answer.questionId
      );
      return (
        <li key={index}>
          {question.text}: {renderScoreResult(question, answer)}
        </li>
      );
    });
  };

  const takeNextQuiz = () => {
    if (currentQuiz === quizzes.length - 1) {
      setCurrentQuiz(0);
    } else {
      setCurrentQuiz(currentQuiz + 1);
    }
    setCurrentQuestion(0);
    setCurrentAnswer("");
    setAnswers([]);
    setShowScore(false);
    setIsCorrect(false);
    setTotalCorrect(0);
  };

  const next = () => {
    const answer = { questionId: currentQuestion, currentAnswer };

    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer("");
    setShowNext(false);
    setIsCorrect(false);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    setShowScore(true);
  };

  if (showScore) {
    return (
      <div className="container Score">
        <Score
          quizTitle={quiz.title}
          takeNextQuiz={takeNextQuiz}
          renderScoreData={renderScoreData}
          totalQuizzes={quizzes.length}
          currentQuiz={currentQuiz + 1}
          totalQuestions={questions.length}
          totalCorrect={totalCorrect}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h3>{quiz.title}</h3>
        <Question question={questions[currentQuestion].text} />
        <Choices
          question={questions[currentQuestion]}
          currentAnswer={currentAnswer}
          handleClick={handleClick}
        />

        {showNext ? (
          <div>
            {isCorrect ? (
              <p className="mark">Correct!</p>
            ) : (
              <p className="mark">Incorrect...</p>
            )}
            <button className="btn btn-primary" onClick={next}>
              Next
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
};
