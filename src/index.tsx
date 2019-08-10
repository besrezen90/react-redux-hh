import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App";
import reducer from "./reducers";

/* FIXME: добавить сохранения пользовалетя в sessionstorage при логине и удаление при выходе */

const store = createStore(
  reducer,
  applyMiddleware(thunk)
  //   composeWithDevTools()
  // other store enhancers if any
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
