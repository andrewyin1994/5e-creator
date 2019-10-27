import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegistrationForm';

import './LoginPage.css';

class LoginPage extends React.Component {

  static defaultProps = {
    location: {},
    history: {
      push: () => { }
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      active: 'Login'
    };
  }

  onLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  }

  setRegisterState = () => {
    this.setState({
      active: 'Register'
    });
  }
  setLoginState = () => {
    this.setState({
      active: 'Login'
    });
  }

  render() {
    const forms = {
      'Login': <LoginForm onLoginSuccess={this.onLoginSuccess} setRegisterState={this.setRegisterState}/>,
      'Register': <RegisterForm setLoginState={this.setLoginState} />
    };

    return (
      <section className='loginPage'>
        <h1>A Simple DnD 5e Character App</h1>
        <p id='loginMessage'>
          5e Stuff is a lightweight Dungeons and Dragons 5e character management application. Use it to keep track of all of your characters!
        </p>
        <fieldset>
          <h2>{this.state.active}</h2>
          {forms[this.state.active]}
        </fieldset>
        <p id='demoInfo'>
          Demo Username: voxMachina <br/>
          Demo Password: codenamecriticalrole
        </p>
      </section>
    );
  }
}

export default LoginPage;