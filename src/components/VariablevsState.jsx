import React, { useState } from "react";

const VariablevsState = () => {
  const [color, setColor] = useState("red");
  //   let color = "red";

  return (
    <div>
      <h1>Variable vs State in React component</h1>
      <h1>{color}</h1>
      {/* <button onClick={() => (color = "green")}>change color</button> */}
      <button onClick={() => setColor("green")}>Change color</button>
    </div>
  );
};

export default VariablevsState;
