System.register(["react", "react-dom", "./App.js"], function (_export, _context) {
  "use strict";

  var React, ReactDOM, App, rootElement;
  return {
    setters: [function (_react) {
      React = _react.default;
    }, function (_reactDom) {
      ReactDOM = _reactDom.default;
    }, function (_AppJs) {
      App = _AppJs.default;
    }],
    execute: function () {
      rootElement = document.getElementById("react-root");
      ReactDOM.render(React.createElement(App, null), rootElement);
    }
  };
});