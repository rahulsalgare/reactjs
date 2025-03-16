import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsFinished = activeQuestionIndex >= QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
    },
    [userAnswers]
  );

  const handleSkipAnswer = useCallback(() => {
    console.log("TIMOUTEDDD");
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsFinished) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz complete" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      {!quizIsFinished && (
        <div id="question">
          <QuestionTimer
            key={activeQuestionIndex}
            timeout={10000}
            onTimeout={handleSkipAnswer}
          />
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {shuffledAnswers.map((answer) => (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
