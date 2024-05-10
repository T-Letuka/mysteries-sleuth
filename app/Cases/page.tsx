import MysteryCaseCard from "../Components/MysteryCard";
import mysteryCases from "@/app/Data/Mystery";
import riddles from "../Data/Riddles";
import RiddleCards from "../Components/RiddleCards";
import ResponsiveNav from "../Components/ResponsiveNav";

const MysteryCasesPage: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <ResponsiveNav />
      <h1 className="text-2xl font-bold mb-4">Mystery Cases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mysteryCases.map((mysteryCase) => (
          <MysteryCaseCard key={mysteryCase.id} mysteryCase={mysteryCase} />
        ))}
      </div>
      <h1 className="text-2xl font-bold my-8">Riddles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {riddles.map((riddle) => (
          <RiddleCards key={riddle.id} riddle={riddle} />
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-4">Puzzles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mysteryCases.map((mysteryCase) => (
          <MysteryCaseCard key={mysteryCase.id} mysteryCase={mysteryCase} />
        ))}
      </div>
    </div>
  );
};

export default MysteryCasesPage;
