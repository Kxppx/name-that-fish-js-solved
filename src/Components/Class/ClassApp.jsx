import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    fishIndex: 0,
    answersLeft: ["trout", "salmon", "tuna", "shark"],
    points: { correct: 0, incorrect: 0 },
    choice: "",
  };
  render() {
    const { fishIndex, answersLeft, points, choice } = this.state;
    return (
      <>
        {points.correct + points.incorrect === 4 ? (
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
