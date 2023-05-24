import React, { useState } from "react";
import BmiScore from "./bmicomponents/BmiScore";
import "./App.css";
import BmiForm from "./bmicomponents/BmiForm";

function App() {
  const [bmi, setbmi] = useState(18);
  const [bmitype, setbmitype] = useState("overweight");

  return (
    <div className="App">
      <h2>Welcome to React</h2>
      <button onClick={() => setbmi(bmi + 5)}>Click</button>
      <BmiForm getData={onFormSubmit} />
      <BmiScore />
    </div>
  );
}

export default App;
