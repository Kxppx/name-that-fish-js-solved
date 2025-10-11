import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    const {
      points: { correct, incorrect },
      answersLeft,
    } = this.props;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrect}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correct}</div>
      </div>
    );
  }
}
