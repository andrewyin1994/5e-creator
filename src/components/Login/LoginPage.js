import React from 'react';
import LoginForm from './LoginForm';

import './LoginPage.css';

class LoginPage extends React.Component {

  static defaultProps = {
    location: {},
    history: {
      push: () => { }
    }
  }

  onLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  }

  render() {
    return (
      <section className='loginPage'>
        <h1>A Simple DnD 5e Character App</h1>
        <p id='loginMessage'>
          5e Stuff is a lightweight Dungeons and Dragons 5e character management application. Use it to keep track of all of your characters!
        </p>
        <fieldset className='frosted-glass'>
          <h2>Login</h2>
          <LoginForm
            onLoginSuccess={this.onLoginSuccess}
          />
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