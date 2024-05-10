"use client";
import { MysteryCase } from "../interfaces/MysteryCases";

interface Props {
  mysteryCase: MysteryCase;
}

const MysteryCaseCard: React.FC<Props> = ({ mysteryCase }) => {
  return (
    <div className="border rounded-lg p-4">
      <img
        src={mysteryCase.imageUrl}
        alt={mysteryCase.title}
        className="w-full h-auto mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{mysteryCase.title}</h2>
      <p className="text-gray-600 mb-4">{mysteryCase.description}</p>
      <button className="text-blue-500 underline">Read More</button>
    </div>
  );
};

export default MysteryCaseCard;
