import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: '', password: ''};

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){

  }

  onChangePassword(event){
    this.setState({password: event.target.value});
  }

  onChangeLogin(event) {
    this.setState({login: event.target.value});
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <div>
        <label> Логин: </label>
        <input type="text" name="login" value={this.state.login}
          onChange={this.onChangeLogin}/>
        </div>
        <br/>
        <div>
        <label> Пароль: </label>
        <input type="password" name="password" value={this.state.password}
          onChange={this.onChangePassword}/>
        </div>
        <div>
        <input type="submit" value="Login Now" />
        <input type="button" value="Register Now"/>
        </div>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginForm />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
