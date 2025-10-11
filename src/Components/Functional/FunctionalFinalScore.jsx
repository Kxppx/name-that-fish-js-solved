import "./styles/final-score.css";

export const FunctionalFinalScore = ({ points: { correct, incorrect } }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correct}</p>
      <hr />
      <p>{correct + incorrect}</p>
    </div>
  </div>
);
