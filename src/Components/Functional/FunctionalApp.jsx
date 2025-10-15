import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../constants/fish-data";
import { useState } from "react";

export function FunctionalApp() {
  const [gameState, setGameState] = useState({
    points: { correct: 0, incorrect: 0 },
  });
  const {
    points,
    points: { correct, incorrect },
  } = gameState;

  const fishArr = initialFishes.map((fish) => fish.name);
  const fishIndex = correct + incorrect;
  const isGameOver = fishIndex === initialFishes.length;
  const answersLeft = fishArr.slice(fishIndex);

  return (
    <>
      {isGameOver && <FunctionalFinalScore points={points} />}
      {!isGameOver && (
        <>
          <FunctionalScoreBoard points={points} answersLeft={answersLeft} />
          <FunctionalGameBoard
            setGameState={setGameState}
            fishIndex={fishIndex}
          />
        </>
      )}
    </>
  );
}
