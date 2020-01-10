System.register(["react"], function (_export, _context) {
  "use strict";

  var React, useState;

  function App() {
    // Uncomment the commented with a arrow part to see the error (in console)
    // => const [x, setx] = useState(10);
    return (// <div className="App" onClick={() => setx(100)}>
      React.createElement("div", {
        className: "App",
        onClick: () => console.log(100)
      }, React.createElement("h1", null, "Hello CodeSandbox "), React.createElement("h2", null, "Start editing to see some magic happen!"))
    );
  }

  _export("default", App);

  return {
    setters: [function (_react) {
      React = _react.default;
      useState = _react.useState;
    }],
    execute: function () {}
  };
});