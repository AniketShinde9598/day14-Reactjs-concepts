import React from "react";

function BmiScore(props) {
  const { Mybmi, Mybmitype } = props;
  return (
    <div>
      BmiScore : {Mybmi}
      <br />
      BmiType : {Mybmitype}
    </div>
  );
}

export default BmiScore;
