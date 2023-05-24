import React, { useState } from "react";
import BmiScore from "./bmicomponents/BmiScore";
import "./App.css";

function App() {
  const [bmi, setbmi] = useState(18);

  return (
    <div className="App">
      <h2>Welcome to React</h2>
      <h4>BMI : {bmi}</h4>
      <button onClick={() => setbmi(bmi + 5)}>Click</button>
      <BmiScore Mybmi={bmi} />
    </div>
  );
}

export default App;
