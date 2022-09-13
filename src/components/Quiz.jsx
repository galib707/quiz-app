import Question from "./Question";
import Option from "./Option";
import { useEffect, useState } from "react";
import Bar from "./Bar";
import Confetti from "react-dom-confetti";
import quesObj from "../questions";
import ScoreBorad from "./ScoreBorad";
import { useRef } from "react";

function Quiz() {
  let [questionID, setQuestionID] = useState(0);
  let [selected, setSelected] = useState(null);
  let [scoreTable, setScoreTable] = useState([]);
  let [startConfettin, setStartConfettin] = useState(false);
  let [clicked, setClicked] = useState(false);
  // let [Id, setTimeoutId] = useState(null);
  let timerID = useRef(null);

  const scoreRecord = (id, isCorrect, text) => {
    let ques = quesObj[id].ques;
    let current = "";
    for (let ques of quesObj[id].options) {
      if (ques.isCorrect === true) {
        current += ques.text;
      }
    }
    setScoreTable((curr) => curr.concat([[ques, current, isCorrect, text]]));
    console.log(scoreTable);
  };
  let updateSelected = (i) => {
    let ans = quesObj[questionID].options[i].isCorrect;
    if (ans) setStartConfettin((curr) => true);
    setClicked((curr) => true);
    setTimeout(() => {
      setStartConfettin((curr) => false);
    }, 10);
    setTimeout(() => {
      setClicked((curr) => false);
    }, 10);

    scoreRecord(questionID, ans, quesObj[questionID].options[i].text);
    setSelected(i);
    setQuestionID(questionID + 1 <= quesObj.length - 1 ? questionID + 1 : 0);
    // if (questionID.length === quesObj.length - 2) {
    //   clearTimeout(Id);
    // }
  };

  useEffect(() => {
    setSelected(null);
    if (questionID === 4) {
      return;
    }
    timerID.current = setTimeout(() => {
      setQuestionID((prev) => prev + 1);
    }, 5000);
    return () => {
      clearTimeout(timerID.current);
    };
  }, [questionID]);

  console.log();

  return (
    <div className="container">
      {scoreTable.length < 5 && (
        <div className="container_inner">
          <div className="title">
            <h1>Quiz!</h1>
          </div>
          <Question text={quesObj[questionID].ques} />
          <div className="choice-container">
            {quesObj[questionID].options.map((option, idx) => (
              <Option
                bgColor={
                  selected === idx
                    ? quesObj[questionID].options[idx].isCorrect
                      ? "blue"
                      : "red"
                    : null
                }
                text={option.text}
                isCorrect={option.isCorrect}
                handleClick={updateSelected}
                id={idx}
              />
            ))}
            <Confetti
              active={startConfettin}
              config={{ spread: 120, elementCount: 300 }}
            />
          </div>
          <Bar clicked={clicked} />
        </div>
      )}
      {scoreTable.length === 5 && <ScoreBorad scoreTable={scoreTable} />}
    </div>
  );
}

export default Quiz;
