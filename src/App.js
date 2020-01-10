import React, { useState } from "react";
// import "./styles.css";

export default function App() {
  // Uncomment the commented with a arrow part to see the error (in console)
  // => const [x, setx] = useState(10);
  return (
    // <div className="App" onClick={() => setx(100)}>
    <div className="App" onClick={() => console.log(100)}>
      {/*=> {x} */}
  <h1>Hello CodeSandbox </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
