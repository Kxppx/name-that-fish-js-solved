import "./styles/game-board.css";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalGameBoard({ setGameState, fishIndex, choice }) {
  const currentFish = initialFishes[fishIndex];

  const handleSubmit = (answer) => {
    const isCorrect = answer === currentFish.name;
    setGameState((prev) => ({
      ...prev,
      fishIndex: prev.fishIndex + 1,
      answersLeft: prev.answersLeft.slice(1),
      points: {
        ...prev.points,
        correct: isCorrect ? prev.points.correct + 1 : prev.points.correct,
        incorrect: !isCorrect
          ? prev.points.incorrect + 1
          : prev.points.incorrect,
      },
      choice: "",
    }));
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(choice);
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={choice}
          onChange={(e) => {
            setGameState((prev) => ({ ...prev, choice: e.target.value }));
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
