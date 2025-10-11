import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../data/data";

export class ClassApp extends Component {
  state = {
    fishIndex: 0,
    answersLeft: initialFishes,
    points: { correct: 0, incorrect: 0 },
    choice: "",
  };
  render() {
    const { fishIndex, answersLeft, points, choice } = this.state;
    return (
      <>
        {fishIndex === initialFishes.length ? (
          <ClassFinalScore points={points} />
        ) : (
          <>
            <ClassScoreBoard points={points} answersLeft={answersLeft} />
            <ClassGameBoard
              setGameState={(update) => this.setState(update)}
              fishIndex={fishIndex}
              choice={choice}
            />
          </>
        )}
      </>
    );
  }
}
