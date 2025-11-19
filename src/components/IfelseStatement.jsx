import React from "react";

const IfelseStatement = () => {
  const login = "yes";

  return <>{login == "yes" ? <h1>User login</h1> : <h1>User not login</h1>}</>;
};

export default IfelseStatement;
