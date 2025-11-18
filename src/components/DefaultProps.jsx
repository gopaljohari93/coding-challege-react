import React from "react";

const DefaultProps = ({ name = "unknown user" }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
    </div>
  );
};

export default DefaultProps;
