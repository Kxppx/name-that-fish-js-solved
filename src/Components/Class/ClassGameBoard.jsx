import { Component } from "react";
import { initialFishes } from "../../constants/fish-data";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    input: "",
  };
  render() {
    const { setGameState, fishIndex } = this.props;
    const { input } = this.state;
    const currentFish = initialFishes[fishIndex];

    const handleSubmit = (answer) => {
      const isCorrect = answer === currentFish.name;
      setGameState((prev) => ({
        ...prev,
        points: {
          ...prev.points,
          correct: isCorrect ? prev.points.correct + 1 : prev.points.correct,
          incorrect: !isCorrect
            ? prev.points.incorrect + 1
            : prev.points.incorrect,
        },
      }));
      this.setState({ input: "" });
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
            handleSubmit(input);
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={input}
            onChange={(e) => {
              this.setState({ input: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
