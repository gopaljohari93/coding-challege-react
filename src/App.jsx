import React from "react";
import ParentElement from "./components/ParentElement";
import PushCode from "./components/PushCode";
import User from "./components/User";
import CmvsFun from "./components/CmvsFun";
// import { Login as AdminLogin } from "./components/AdminLogin";
// import { Login } from "./components/UserLogin";
import VariablevsState from "./components/VariablevsState";
import TernaryOperator from "./components/TernaryOperator";
import DefaultProps from "./components/DefaultProps";

const App = () => {
  return (
    <>
      {/* // <ParentElement />
      // <PushCode />
      // <User />
      // <CmvsFun /> */}
      {/* <Login />
      <AdminLogin /> */}
      {/* <VariablevsState /> */}
      {/* <TernaryOperator /> */}
      <DefaultProps name={"gopal j"} />
      <DefaultProps name={"peter"} />
      <DefaultProps name={"sam"} />
    </>
  );
};

export default App;
