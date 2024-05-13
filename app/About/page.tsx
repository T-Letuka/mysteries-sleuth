"use client";

import React, { useState } from "react";
import mysteryCases from "../Data/Mystery";
import MysteryCaseCard from "../Components/MysteryCard";
import ResponsiveNav from "../Components/ResponsiveNav";

const AboutPage: React.FC = () => {
  const [showPuzzle, setShowPuzzle] = useState(true);
  const [solved, setSolved] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === "mystery") {
      setSolved(true);
      setMessage("Congratulations! You solved the mystery!");
    } else {
      setMessage("Hmmm... Try again.");
    }
  };

  return (
    <div className="pt-[1rem] pb-[3rem] h-[100vh] bg-black">
      <ResponsiveNav />
      <div className="w-[80%] text-white mx-auto  items-center pt-[5rem]">
        <h1 className="text-3xl font-bold mb-4">
          Sleuths
          <span className="text-[#d00000] mr-2 ml-2">Mystery</span>
          Website
        </h1>
        <p className="mb-4 text-white">
          Welcome to the most mysterious website on the internet! We are
          dedicated to bringing you thrilling mysteries, mind-bending puzzles,
          and spine-tingling adventures.Let's solve this
          <span className="text-[#FF0800] mr-2 ml-1">mystery</span>
        </p>
        {showPuzzle && (
          <>
            <p className="mb-2 text-white">
              But wait... Can you solve the ultimate{" "}
              <span className="text-[#d00000] mr-2 ml-2">mystery</span> of this
              website? Enter the correct code to unlock its secrets.
            </p>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
              onClick={() => setShowPuzzle(false)}
            >
              Solve the Mystery
            </button>
          </>
        )}
        {!showPuzzle && (
          <>
            <form onSubmit={handleSubmit} className="mb-4">
              <label className="block">
                Enter the secret code:
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="form-input mt-1 block w-[30%] text-black"
                  autoFocus
                />
              </label>
              <button
                type="submit"
                className="bg-[#d00000] text-white font-bold py-2 px-4 rounded mt-2"
              >
                Submit
              </button>
              {message && <p className="mt-2">{message}</p>}
            </form>
            {solved && (
              <div className="border rounded-lg p-4 mt-4 bg-black">
                <h2 className="text-lg font-semibold">Congratulations!</h2>
                <p className="mt-2">
                  You've unlocked the hidden mystery of this website.
                </p>
                <div className="p-2 bg-black">
                  {mysteryCases.map((mysteryCase) => (
                    <MysteryCaseCard
                      key={mysteryCase.id}
                      mysteryCase={mysteryCase}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
