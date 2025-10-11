import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [gameState, setGameState] = useState({
    fishIndex: 0,
    answersLeft: ["trout", "salmon", "tuna", "shark"],
    points: { correct: 0, incorrect: 0 },
    choice: "",
  });
  const { fishIndex, answersLeft, points, choice } = gameState;
  return (
    <>
      {points.correct + points.incorrect === 4 ? (
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
