"use client";
import React, { useState } from "react";
import ResponsiveNav from "../Components/ResponsiveNav";

const page = () => {
  const [answers, setAnswers] = useState<string[]>(["", "", ""]);
  const [feedback, setFeedback] = useState<string>("");
  const [questionState, setQuestionState] = useState<number>(1);

  const checkAnswer = (questionNumber: number) => {
    const correctAnswers = [
      "Museum was the target",
      "Price not yet known.Find the true Culprit",
      "The suspect is Nigel in Paris",
      "Museum staff have been on edge since the incident",
      "True Culprit is someone within the museum",
      "The detective knows",
    ];
    if (
      answers[questionNumber - 1].toLowerCase() ===
      correctAnswers[questionNumber - 1]
    ) {
      setFeedback("Correct! Proceed to the next clue.");
      if (questionNumber < 6) {
        setQuestionState(questionNumber + 1);
      } else {
        setQuestionState(7);
      }
    } else {
      setFeedback("Incorrect. Keep investigating!");
    }
  };
  return (
    <>
      <ResponsiveNav />
      <div className="pt-[1rem] w-[80%] md:w-[90%] mx-auto "></div>
    </>
  );
};

export default page;
