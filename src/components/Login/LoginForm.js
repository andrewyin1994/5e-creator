import React from 'react';
import UserContext from '../../contexts/UserContext';

class LoginForm extends React.Component {

  static contextType = UserContext;

  static defaultProps = {
    onLoginSuccess: () => { },
  }

  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  handleSubmitJWTAuth = async (event) => {
    event.preventDefault();
    this.setState({ error: null });

    const { userName, password } = event.target;

    await this.context.login({ 
      userName: userName.value,
      password: password.value
    });

    userName.value = '';
    password.value = '';
    this.props.onLoginSuccess();  
  }

  render() {
    return (
      <form
        className='loginForm'
        onSubmit={this.handleSubmitJWTAuth}
      >
        <label htmlFor='userName'>
          Username:
        </label>
        <input required type='text' id='userName' name='userName'>
        </input>

        <br />

        <label htmlFor='password'>
          Password:
        </label>
        <input required type='password' id='password' name='password'>
        </input>
        {this.context.error ? <p id='error'>{this.context.error}</p> : <br/>}
        <section className='buttonSection'>
          <input className='loginButton' type='submit' value='Login'></input>
          <button className='loginButton' type='button' onClick={this.props.setRegisterState}>Register</button>
        </section>
      </form>
    );
  }
}

export default LoginForm;