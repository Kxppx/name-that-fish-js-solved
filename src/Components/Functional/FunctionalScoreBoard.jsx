import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard({
  points: { correct, incorrect },
  answersLeft,
}) {
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
