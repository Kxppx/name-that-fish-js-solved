import { Component } from "react";

export class ClassFinalScore extends Component {
  render() {
    const {
      points: { correct, incorrect },
    } = this.props;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correct}</p>
          <hr />
          <p>{correct + incorrect}</p>
        </div>
      </div>
    );
  }
}
