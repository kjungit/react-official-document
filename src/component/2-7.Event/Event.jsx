import React from "react";

function Event() {
  const handleButtonClick = (e) => {
    console.dir(e);
    console.log("handleButtonClick");
  };

  const handleMouseLeave = (e) => {
    console.dir(e);
  };

  const handleClickCapture = () => {
    console.log("handleClickCapture");
  };
  const handleClickCapture2 = () => {
    console.log("handleClickCapture2");
  };

  const handClickBubble = () => {
    console.log("handClickBubble");
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>
          button
        </button>
      </div>
    </div>
  );
}

export default Event;
