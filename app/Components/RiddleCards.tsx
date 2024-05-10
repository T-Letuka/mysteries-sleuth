import { Riddle } from "@/app/interfaces/Riddles";

interface Props {
  riddle: Riddle;
}

const RiddleCard: React.FC<Props> = ({ riddle }) => {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Riddle {riddle.id}</h2>
      <p className="text-gray-600 mb-4">Q: {riddle.question}</p>
      <p className="text-gray-600 mb-4">A: {riddle.answer}</p>
    </div>
  );
};

export default RiddleCard;
