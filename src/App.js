import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [timeInput, setTimeInput] = useState();
  const timer = (e) => {
    if (e.key === "Enter" && timeInput > 0) {
      setTime(timeInput);
    }
  };
  useEffect(() => {
    let interval = null;
    if (time > 0) {
      interval = setInterval(() => setTime((prevTime) => prevTime - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => setTimeInput(parseInt(e.target.value))}
        onKeyDown={timer}
      />
      <div id="current-time">{time}</div>
    </div>
  );
}

export default App;
