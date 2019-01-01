import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./app";

const renderFn = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
};

renderFn(App);
if (module.hot) {
  module.hot.accept("./app.js", function() {
    renderFn(App);
  });
}
