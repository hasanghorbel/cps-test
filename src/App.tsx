import { useState } from "react";
import "./App.css";

function Game({
  timer,
  count,
  setCount,
}: {
  timer: number;
  count: number;
  setCount: Function;
}) {
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Time left: {timer}</h1>
      <button className="btn1" onClick={handleClick}>
        Clicked {count} times
      </button>
    </div>
  );
}

function Start({
  timer,
  onButtonClick,
}: {
  timer: string;
  onButtonClick: any;
}) {
  return (
    <div>
      <h1>CPS test</h1>
      <div>
        <label>Select the number of seconds: </label>
        <input placeholder={timer} id="textbox"></input>
      </div>
      <button className="btn1" onClick={onButtonClick}>
        Click to begin
      </button>
    </div>
  );
}

export default function MyApp() {
  const [start, setStart] = useState(false);
  const [staringtimer, setStartingTimer] = useState(1);
  const [timer, setTimer] = useState(1);
  const [count, setCount] = useState(0);

  function onButtonClick() {
    var inputvalue = parseInt((document.getElementById("textbox") as HTMLInputElement)
      .value);
    if (!isNaN(inputvalue)) {
      setTimer(inputvalue);
      setStartingTimer(inputvalue);
    }
    setStart(true);
  }

  if (start) {
    if (timer < 1) {
      return (
        <div>
          <h1>GAME OVER</h1>
          <h1>
            Your record is <br></br>
            {(count / staringtimer).toFixed(1)} clicks per second
          </h1>
        </div>
      );
    } else {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return <Game timer={timer} count={count} setCount={setCount} />;
    }
  } else {
    return <Start timer={timer.toString()} onButtonClick={onButtonClick} />;
  }
}
