import { useState } from "react";

function Addimage() {
  // let counter = 100;
  let [counter, setCounter] = useState(100);
  let [displayImage, setDisplayImage] = useState(
    "https://picsum.photos/id/239/300/300"
  );

  let likeMe = () => {
    counter = counter + 1;
    setCounter(counter); // PERFORM DOM OPERATION
  };

  let changeImage = () => {
    displayImage = "https://picsum.photos/id/231/300/300";
    setDisplayImage(displayImage); // perform dom operation
  };

  let resetImage = () => {
    displayImage = "https://picsum.photos/id/239/300/300";
    setDisplayImage(displayImage); // perform dom operation
  };

  return (
    <div>
      <img className="my-3 p-3" src={displayImage} />
      <h1 className="my-3 p-3">Like {counter}</h1>

      <input
        className="btn btn-info m-3"
        type="button"
        value="Like Me"
        onClick={likeMe}
      />
      <br />
      <input
        className="btn btn-success m-3"
        type="button"
        value="Chnage Image"
        onClick={changeImage}
      />
      <input
        className="btn btn-primary m-3"
        type="button"
        value="Reset Image"
        onClick={resetImage}
      />
    </div>
  );
}

export default Addimage;
