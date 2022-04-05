import React, { useState } from "react";

function Answers(props) {
  let { id, question, answer } = props;
  const [btn, setbtn] = useState("+");
  const [answers, setanswers] = useState("");

  function btnclick() {
    if (btn === "+") {
      setbtn("-");
      setanswers(answer);
    } else {
      setbtn("+");
      setanswers("");
    }
  }
  return (
    <div>
      <p>
        {question} {<button onClick={btnclick}>{btn}</button>}
      </p>
      <p>{answers}</p>
    </div>
  );
}

export default Answers;
