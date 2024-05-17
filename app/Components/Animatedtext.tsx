import { motion } from "framer-motion";
import React from "react";

const text = [
  "In the dimly lit streets of an enigmatic city, where shadows weave tales of intrigue and whispers carry secrets like currency, lies a labyrinth of mysteries awaiting unraveling.",
  "Each case is a tapestry of enigmas, where truth dances with deception, and every clue holds the key to unlocking the hidden depths of human nature. ",
  "From the chilling depths of unsolved crimes to the haunting echoes of forgotten legends, embark on a journey into the heart of the unknown, where every twist and turn reveals a new layer of the puzzle. ",
  "Welcome to a world where the line between fact and fiction blurs, and only the keenest of minds dare to tread.",
];

const AnimatedText = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {text.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.5, duration: 0.5 }}
          className="mb-4 text-lg text-black"
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

export default AnimatedText;
