"use client";
import React, { useState } from "react";
import ResponsiveNav from "../Components/ResponsiveNav";

const InvestigationComponent: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(["", "", ""]);
  const [feedback, setFeedback] = useState<string>("");
  const [questionState, setQuestionState] = useState<number>(1);

  const checkAnswer = (questionNumber: number) => {
    const correctAnswers = [
      "museum was the target",
      "price not yet known. find the true culprit",
      "the suspect is nigel in paris",
    ];
    if (
      answers[questionNumber - 1].toLowerCase() ===
      correctAnswers[questionNumber - 1].toLowerCase()
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
      <div className="pt-4 w-[90%] md:w-[80%] mx-auto">
        <h1 className="heading text-2xl md:text-3xl font-bold text-center mb-4">
          The Vanishing Relic
        </h1>
        <p className="text-black mt-2 text-[16px] md:text-[18px]">
          <span className="underline">Scenario:</span>
          <br />
          <br />
          In the heart of a bustling city, the renowned Museum of Antiquities
          houses a legendary relic known as the "Eye of Horus," a symbol of
          ancient Egyptian power and protection. One fateful night, during a
          prestigious gala event, the relic mysteriously vanishes from its
          heavily guarded display case.
        </p>
        <p className="text-black mt-2 mb-2 text-[16px] md:text-[18px]">
          <span className="underline">Characters:</span>
          <br />
          <br />
          <span className="underline font-sans">
            Detective James Hawthorne:
          </span>
          A seasoned investigator known for his sharp wit and keen eye for
          detail.
          <br />
          <span className="underline font-sans">Dr. Evelyn Ramirez:</span>
          The museum's curator, deeply distraught by the disappearance of the
          artifact.
          <br />
          <span className="underline font-sans">Nigel Blackwood:</span>
          A wealthy collector rumored to have a fascination with ancient
          artifacts.
          <br />
        </p>
        <h2 className="text-xl underline font-bold mb-2 mt-2">
          Investigation:
        </h2>
        {questionState === 1 && (
          <div className="mx-auto border border-gray-600 w-full md:w-[50%] shadow-lg p-4">
            <h3 className="mini-heading mt-2 px-2 text-center">
              Clue Analysis
            </h3>
            <p className="mb-2 mt-2 px-2 font-bold text-[18px] md:text-[20px] text-center">
              Vjdnl ltf ymj Jswjfx.
            </p>
            <p className="px-4 text-[16px] md:text-[18px] text-center mb-2">
              Decode the Clue:
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 rounded-md mb-2 md:mb-0 w-full md:w-auto"
                placeholder="Your answer..."
                value={answers[0]}
                onChange={(e) =>
                  setAnswers([e.target.value, answers[1], answers[2]])
                }
              />
              <button
                className="bg-black hover:bg-gray-500 hover:text-red-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
                onClick={() => checkAnswer(1)}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {questionState === 2 && (
          <div className="mx-auto border border-gray-600 w-full md:w-[50%] shadow-lg p-4">
            <h3 className="mini-heading mt-2 px-2 text-center">
              Clue Analysis
            </h3>
            <p className="mb-2 mt-2 px-2 font-bold text-[18px] md:text-[20px] text-center">
              Zuotm ynq mfx gjxy. Gtbp ymj Xykk Kqxxzj
            </p>
            <p className="px-4 text-[16px] md:text-[18px] text-center mb-2">
              Decode the Clue:
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 rounded-md mb-2 md:mb-0 w-full md:w-auto"
                placeholder="Your answer..."
                value={answers[1]}
                onChange={(e) =>
                  setAnswers([answers[0], e.target.value, answers[2]])
                }
              />
              <button
                className="bg-black hover:bg-gray-500 hover:text-red-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
                onClick={() => checkAnswer(2)}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {questionState === 3 && (
          <div className="mx-auto border border-gray-600 w-full md:w-[50%] shadow-lg p-4">
            <h3 className="mini-heading mt-2 px-2 text-center">
              Clue Analysis
            </h3>
            <p className="mb-2 mt-2 px-2 font-bold text-[18px] md:text-[20px] text-center">
              Fsi xtrjwsy mj xli Gjmnw yt nyfym
            </p>
            <p className="px-4 text-[16px] md:text-[18px] text-center mb-2">
              Decode the Clue:
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 rounded-md mb-2 md:mb-0 w-full md:w-auto"
                placeholder="Your answer..."
                value={answers[2]}
                onChange={(e) =>
                  setAnswers([answers[0], answers[1], e.target.value])
                }
              />
              <button
                className="bg-black hover:bg-gray-500 hover:text-red-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
                onClick={() => checkAnswer(3)}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        <p className="text-center text-red-500 mt-4">{feedback}</p>
      </div>
    </>
  );
};

export default InvestigationComponent;
