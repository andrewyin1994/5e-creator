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
        <fieldset>
          <legend>
            <h2>Login</h2>
          </legend>
          <LoginForm
            onLoginSuccess={this.onLoginSuccess}
          />
        </fieldset>
      </section>
    );
  }
}

export default LoginPage;