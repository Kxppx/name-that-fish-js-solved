import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../data/data";
import { useState } from "react";

export function FunctionalApp() {
  const [gameState, setGameState] = useState({
    fishIndex: 0,
    answersLeft: initialFishes,
    points: { correct: 0, incorrect: 0 },
    choice: "",
  });
  const { fishIndex, answersLeft, points, choice } = gameState;
  return (
    <>
      {fishIndex === initialFishes.length ? (
        <FunctionalFinalScore points={points} />
      ) : (
        <>
          <FunctionalScoreBoard points={points} answersLeft={answersLeft} />
          <FunctionalGameBoard
            setGameState={setGameState}
            fishIndex={fishIndex}
            choice={choice}
          />
        </>
      )}
    </>
  );
}
