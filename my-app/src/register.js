import React from 'react';
import ReactDOM from 'react-dom';

class RegisterForm extends React.Component {
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
    <div className="Register-form">
      <form  onSubmit={this.onSubmit}>
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
        <input type="submit" value="Register" />
        <input type="button" value="Login Now"/>
        </div>
      </form>
    </div> 
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RegisterForm />
);