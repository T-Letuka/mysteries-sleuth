"use client";
import { useState } from "react";
import ResponsiveNav from "../Components/ResponsiveNav";
import MysteryCases from "../Components/MysteryCases";

const HeistCase = () => {
  const [answers, setAnswers] = useState<string[]>(["", "", ""]);
  const [feedback, setFeedback] = useState<string>("");
  const [questionState, setQuestionState] = useState<number>(1);

  const checkAnswer = (questionNumber: number) => {
    const correctAnswers = ["constellation", "ring", "black sedan"];
    if (
      answers[questionNumber - 1].toLowerCase() ===
      correctAnswers[questionNumber - 1]
    ) {
      setFeedback("Correct! Proceed to the next clue.");
      if (questionNumber < 3) {
        setQuestionState(questionNumber + 1);
      } else {
        setQuestionState(4);
      }
    } else {
      setFeedback("Incorrect. Keep investigating!");
    }
  };

  return (
    <>
      <ResponsiveNav />
      <div className="container mx-auto p-4 md:flex md:space-x-4">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mt-8 mb-4">The Mysterious Heist</h1>
          <p className="mb-4">
            Welcome, Detective. We need your help solving a perplexing case of a
            heist.
          </p>
          <h2 className="text-xl font-bold mb-2">Case Overview:</h2>
          <p className="mb-4">
            A priceless artifact has been stolen from the Museum of Antiquities.
            The only clue left behind is a cryptic note.
          </p>
          <img src="/clue.jpg" alt="Clue" className="mb-4 w-full" />
          <h2 className="text-xl font-bold mb-2">Investigation:</h2>
          {questionState >= 1 && (
            <div className="mb-4 p-4 border border-gray-300 rounded-lg">
              <h3 className="font-bold mb-2">Clue Analysis:</h3>
              <p className="mb-2">
                The cryptic note found at the crime scene reads: "Follow the
                trail of stars to uncover the truth."
              </p>
              <p className="mb-2">What could "trail of stars" refer to?</p>
              <input
                type="text"
                className="border border-gray-300 px-2 py-1 rounded-md mb-2 w-full"
                placeholder="Your answer..."
                value={answers[0]}
                onChange={(e) =>
                  setAnswers([e.target.value, answers[1], answers[2]])
                }
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={() => checkAnswer(1)}
              >
                Submit
              </button>
            </div>
          )}
          {questionState >= 2 && (
            <div className="mb-4 p-4 border border-gray-300 rounded-lg">
              <h3 className="font-bold mb-2">Security Footage:</h3>
              <p className="mb-2">
                Upon reviewing the security footage, you notice a suspicious
                figure wearing a distinctive ring.
              </p>
              <p className="mb-2">What was the suspicious figure wearing?</p>
              <input
                type="text"
                className="border border-gray-300 px-2 py-1 rounded-md mb-2 w-full"
                placeholder="Your answer..."
                value={answers[1]}
                onChange={(e) =>
                  setAnswers([answers[0], e.target.value, answers[2]])
                }
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={() => checkAnswer(2)}
              >
                Submit
              </button>
            </div>
          )}
          {questionState >= 3 && (
            <div className="mb-4 p-4 border border-gray-300 rounded-lg">
              <h3 className="font-bold mb-2">Witness Testimony:</h3>
              <p className="mb-2">
                A witness saw someone fleeing the scene in a black sedan.
              </p>
              <p className="mb-2">What type of vehicle did the witness see?</p>
              <input
                type="text"
                className="border border-gray-300 px-2 py-1 rounded-md mb-2 w-full"
                placeholder="Your answer..."
                value={answers[2]}
                onChange={(e) =>
                  setAnswers([answers[0], answers[1], e.target.value])
                }
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={() => checkAnswer(3)}
              >
                Submit
              </button>
            </div>
          )}
          {questionState === 4 && (
            <div className="mt-8 p-4 border border-gray-300 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Case Solved!</h2>
              <p className="mb-4">
                With all the clues pieced together, you realize the note's
                reference to "the trail of stars" was pointing to the Orion
                constellation. The distinctive ring in the security footage and
                the witness testimony about the black sedan provide the final
                pieces needed to solve the puzzle.
              </p>
              <p className="mb-4">
                You trace the thief to an old observatory where the stolen
                artifact is hidden. Upon confronting them, they confess to the
                crime, explaining their motive and how they executed the heist.
                Thanks to your keen investigative skills, the priceless Star of
                Alexandria is recovered, and the thief is brought to justice.
              </p>
              <p className="text-lg font-bold">
                Congratulations, Detective! You've successfully solved the case
                of "The Enigma of the Stolen Star." As a token of appreciation
                for your exceptional detective work, you receive the title of
                Master Detective.
              </p>
            </div>
          )}
          {feedback && <p className="text-lg font-bold mt-4">{feedback}</p>}
        </div>
        <div className="md:w-1/3 p-4 border border-gray-300 rounded-lg mt-8 md:mt-0">
          <h3 className="font-bold mb-4">Your Answers:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className={answers[0] ? "text-green-600" : "text-red-600"}>
              Clue 1: {answers[0] || "Not answered yet"}
            </li>
            <li className={answers[1] ? "text-green-600" : "text-red-600"}>
              Clue 2: {answers[1] || "Not answered yet"}
            </li>
            <li className={answers[2] ? "text-green-600" : "text-red-600"}>
              Clue 3: {answers[2] || "Not answered yet"}
            </li>
          </ul>
        </div>
      </div>
      <MysteryCases />
    </>
  );
};

export default HeistCase;
