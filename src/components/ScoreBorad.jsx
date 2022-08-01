import React from "react";
import Row from "./Row";
function ScoreBorad(props) {
  console.log(props);
  const scoreCount = () => {
    return props.scoreTable.filter((item) => item[2]).length;
  };
  return (
    <div className="scorboard">
      <h1>Score: {scoreCount()}</h1>
      <div className="scoreboard_header">
        <div className="header">
          <div className="ques_number">Ques No:</div>
          <div className="questions"> Questions</div>
          <div className="correct_answer">Correct Ans</div>
          <div className="your_answer"> Your ans</div>
        </div>
        {props.scoreTable.map((item, idx) => (
          <Row id={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ScoreBorad;
