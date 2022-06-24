import "./styles.css";
import { useState } from "react";

/*
  1. Select day, Turn it bold (default "M")
  2. Create a state for each day's tomatoes 🍅 
  3. Increment / decrement should work based
     which day is selected 
*/

const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];

export default function App() {
  const [activeDay, setActiveDay] = useState("M");

  const [tomatos, setTomatos] = useState({
    M: "",
    T: "",
    W: "",
    Th: "",
    F: "",
    Sa: "",
    Su: ""
  });
  console.log(tomatos);

  function addTomatos() {
    setTomatos({ ...tomatos, [activeDay]: tomatos[activeDay] + "🍅" });
  }
  function subtractTomatos() {
    setTomatos({ ...tomatos, [activeDay]: tomatos[activeDay].slice(0, -2) });
  }

  const style = { fontWeight: "900", color: "black" };

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        {days.map((day) => (
          <div
            key={day}
            className="tomato-box"
            onClick={() => setActiveDay(day)}
          >
            <h3 style={activeDay === day ? style : {}}>{day}</h3>
            <div data-day={day} className="tomato-day-box">
              {tomatos[day]}
            </div>
          </div>
        ))}
        <div className="buttons-container">
          <div className="button" onClick={subtractTomatos}>
            -
          </div>
          <div className="button" onClick={addTomatos}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}
