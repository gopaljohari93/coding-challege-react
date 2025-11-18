import React, { useState } from "react";

// ex 1 Basic Ternary Operator
const isLoggedIn = false;
const TernaryOperator = () => {
  const [show, setShow] = useState(false);
  const [showpwd, setShowPwd] = useState(false);
  return (
    <>
      <h1>Ternary Operator</h1>
      {/* // ex 1 Basic Ternary Operator */}
      {/* <div>{isLoggedIn ? <h1>Welcome to User</h1> : <h1>Please Login</h1>}</div> */}

      {/* 2. Ternary with Button Change */}
      {/* <button onClick={() => setShow(!show)}>
        {show ? "Hide Content" : "Show Content"}
      </button> */}

      {/* 3. Conditional Class Name */}
      {/* <div className={isDark ? "dark-mode" : "light-mode"}>Theme Applied</div> */}

      {/* 4. Conditional Rendering Component */}
      {/* {loading ? <Loader /> : <Home />} */}

      {/* 5. Ternary in Card UI */}
      {/* <div className="card">
        <p>{stock > 0 ? "In Stock" : "Out of Stock"}</p>
      </div> */}

      {/* 6. Show/Hide Password Example */}
      <input
        type={showpwd ? "text" : "password"}
        placeholder="Enter password"
      />

      <button onClick={() => setShowPwd(!showpwd)}>
        {showpwd ? "Hide" : "Show"}
      </button>
    </>
  );
};

export default TernaryOperator;
