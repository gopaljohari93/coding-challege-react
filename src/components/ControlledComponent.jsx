import React, { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState("");
  return (
    <>
      <form action="" method="get">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <h1>{name}</h1>
    </>
  );
};

export default ControlledComponent;
