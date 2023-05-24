import React from "react";

function BmiScore(props) {
  return (
    <div>
      <h4>BmiScore : {props.Mybmi}</h4>
      <h4>BmiType : {props.Mybmitype}</h4>
    </div>
  );
}

export default BmiScore;
