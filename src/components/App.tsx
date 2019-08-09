import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import style from "./App.less";
import Login from "./Login/Login";
import Main from "./Main/MainView";

interface IProps {}
interface IState {}

export default class App extends Component<IProps, IState> {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className={style.app}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}
