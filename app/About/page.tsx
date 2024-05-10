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
    <div className="container mx-auto my-8">
      <ResponsiveNav />
      <h1 className="text-3xl font-bold mb-4">About Our Mystery Website</h1>
      <p className="mb-4">
        Welcome to the most mysterious website on the internet! We are dedicated
        to bringing you thrilling mysteries, mind-bending puzzles, and
        spine-tingling adventures.
      </p>
      {showPuzzle && (
        <>
          <p className="mb-4">
            But wait... Can you solve the ultimate mystery of this website?
            Enter the correct code to unlock its secrets.
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
                className="form-input mt-1 block w-full"
                autoFocus
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Submit
            </button>
            {message && <p className="mt-2">{message}</p>}
          </form>
          {solved && (
            <div className="border rounded-lg p-4 mt-4">
              <h2 className="text-lg font-semibold">Congratulations!</h2>
              <p className="mt-2">
                You've unlocked the hidden mystery of this website.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
  );
};

export default AboutPage;
