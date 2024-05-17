"use client";
import { useState } from "react";

const HeistCase = () => {
  const [answers, setAnswers] = useState<string[]>(["", "", ""]);
  const [feedback, setFeedback] = useState<string>("");

  const checkAnswer = (questionNumber: number) => {
    const correctAnswers = ["constellation", "ring", "black sedan"];
    if (
      answers[questionNumber - 1].toLowerCase() ===
      correctAnswers[questionNumber - 1]
    ) {
      setFeedback("Correct! Proceed to the next clue.");
    } else {
      setFeedback("Incorrect. Keep investigating!");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8 mb-4">The Mysterious Heist</h1>
      <p className="mb-4">
        Welcome, Detective. We need your help solving a perplexing case of a
        heist.
      </p>
      <h2 className="text-xl font-bold mb-2">Case Overview:</h2>
      <p className="mb-4">
        A priceless artifact has been stolen from the Museum of Antiquities. The
        only clue left behind is a cryptic note.
      </p>
      <img src="/clue.jpg" alt="Clue" className="mb-4" />
      <h2 className="text-xl font-bold mb-2">Investigation:</h2>
      <ol>
        <li>
          <h3 className="font-bold mb-2">Clue Analysis:</h3>
          <p className="mb-2">
            The cryptic note found at the crime scene reads: "Follow the trail
            of stars to uncover the truth."
          </p>
          <p className="mb-2">What could "trail of stars" refer to?</p>
          <input
            type="text"
            className="border border-gray-300 px-2 py-1 rounded-md mb-2"
            placeholder="Your answer..."
            value={answers[0]}
            onChange={(e) =>
              setAnswers([
                ...answers.slice(0, 0),
                e.target.value,
                ...answers.slice(1),
              ])
            }
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => checkAnswer(1)}
          >
            Submit
          </button>
        </li>
        <li>
          <h3 className="font-bold mb-2">Security Footage:</h3>
          <p className="mb-2">
            Upon reviewing the security footage, you notice a suspicious figure
            wearing a distinctive ring.
          </p>
          <p className="mb-2">What was the suspicious figure wearing?</p>
          <input
            type="text"
            className="border border-gray-300 px-2 py-1 rounded-md mb-2"
            placeholder="Your answer..."
            value={answers[1]}
            onChange={(e) =>
              setAnswers([
                ...answers.slice(0, 1),
                e.target.value,
                ...answers.slice(2),
              ])
            }
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => checkAnswer(2)}
          >
            Submit
          </button>
        </li>
        <li>
          <h3 className="font-bold mb-2">Witness Testimony:</h3>
          <p className="mb-2">
            A witness saw someone fleeing the scene in a black sedan.
          </p>
          <p className="mb-2">What type of vehicle did the witness see?</p>
          <input
            type="text"
            className="border border-gray-300 px-2 py-1 rounded-md mb-2"
            placeholder="Your answer..."
            value={answers[2]}
            onChange={(e) =>
              setAnswers([...answers.slice(0, 2), e.target.value])
            }
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => checkAnswer(3)}
          >
            Submit
          </button>
        </li>
      </ol>
      {feedback && <p className="text-lg font-bold mt-4">{feedback}</p>}
    </div>
  );
};

export default HeistCase;
