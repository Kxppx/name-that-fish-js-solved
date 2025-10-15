import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../constants/fish-data";

export class ClassApp extends Component {
  state = {
    points: { correct: 0, incorrect: 0 },
  };
  render() {
    const {
      points,
      points: { correct, incorrect },
    } = this.state;

    const fishArr = initialFishes.map((fish) => fish.name);
    const fishIndex = correct + incorrect;
    const isGameOver = fishIndex === initialFishes.length;
    const answersLeft = fishArr.slice(fishIndex);

    return (
      <>
        {isGameOver && <ClassFinalScore points={points} />}
        {!isGameOver && (
          <>
            <ClassScoreBoard points={points} answersLeft={answersLeft} />
            <ClassGameBoard
              setGameState={(update) => this.setState(update)}
              fishIndex={fishIndex}
            />
          </>
        )}
      </>
    );
  }
}
