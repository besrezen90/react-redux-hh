import React, { Component } from 'react';
import style from './App.less';
import { connect } from 'react-redux';
import { IUser } from '../reducers/user';

interface IProps {
  data: { user: IUser };
  onClickButton: (login: string, password: string) => void;
}

interface IState {}

class App extends Component<IProps, IState> {
  login = React.createRef<HTMLInputElement>();
  passsword = React.createRef<HTMLInputElement>();

  onClick = () => {
    if (this.login.current && this.passsword.current) {
      this.props.onClickButton(this.login.current.value, this.passsword.current.value);
    }
  };

  render() {
    const { login, password } = this.props.data.user;

    const loginWindow = (
      <React.Fragment>
        <input ref={this.login} type="text" placeholder="Введите логин"></input>
        <input ref={this.passsword} type="password" placeholder="Введите пароль"></input>
        <button onClick={this.onClick}>Вход</button>
      </React.Fragment>
    );

    return (
      <div className={style.app}>
        {login && password ? <div>Вы зашли как {login}</div> : loginWindow}
      </div>
    );
  }
}

export default connect(
  store => ({
    data: store
  }),
  dispatch => ({
    onClickButton: (login: string, password: string) => {
      dispatch({
        type: 'ON_LOGIN',
        user: { login, password }
      });
    }
  })
)(App);
