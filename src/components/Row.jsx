import React from "react";

function Row(props) {
  return (
    <div className="header">
      <div className="ques_number">{props.id + 1}</div>
      <div className="questions"> {props.item[0]}</div>
      <div className="correct_answer">{props.item[1]}</div>
      <div
        className="your_answer"
        style={{
          backgroundColor: `${props.item[2] === false ? "red" : "green"}`,
        }}
      >
        {" "}
        {props.item[3]}
      </div>
    </div>
  );
}

export default Row;
