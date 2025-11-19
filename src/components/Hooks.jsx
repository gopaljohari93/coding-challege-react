import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [counter, setCounter] = useState(0);
  // const [data, setData] = useState(0);

  //   useEffect(() => {
  //     console.log("use effect 1");
  //   });

  //   useEffect(() => {
  //     console.log("only once");
  //   }, []);

  //   useEffect(() => {
  //     console.log("use effect 3");
  //   }, [counter]);

  useEffect(() => {
    setCounter(counter + 1);
  }, []);

  return (
    <>
      <h1>useEffect hook Interview Questions</h1>
      <h2>useState and useEffect infinite loop interview Questions</h2>
      {/* <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button> */}
    </>
  );
};

export default Hooks;
