import React, { useEffect, useState } from "react";

function FunctionalComponent() {
  const [date, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date());
  };

  // componentDidMount
  useEffect(() => {
    setInterval(() => tick(), 1000);

    return () => {
      // componentWillUnmount
      clearInterval(setInterval);
    };
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default FunctionalComponent;
