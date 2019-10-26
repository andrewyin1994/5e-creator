import React from 'react';
import UserContext from '../../contexts/UserContext';

class RegisterForm extends React.Component {

  static contextType = UserContext;

  handleRegister = async (e) => {
    e.preventDefault();
    const { userName, password, fullName} = e.target;
    try {
      await this.context.register({
        userName: userName.value,
        password: password.value,
        fullName: fullName.value
      });

      userName.value = '';
      password.value = '';
      fullName.value = '';
    }
    catch (e) {

    }
  }

  render() {
    return (
      <form
        className='loginForm'
        onSubmit={this.handleRegister}
      >
        <label htmlFor='fullName'>
          Name:
        </label>
        <input required type='text' id='fullName' name='fullName'>
        </input>

        <label htmlFor='userName'>
          Username:
        </label>
        <input required type='text' id='userName' name='userName'>
        </input>
        <label htmlFor='password'>
          Password:
        </label>
        <input required type='password' id='password' name='password'>
        </input>

        {this.context.error ? <p id='error'>{this.context.error}</p> : <br/>}
        <section className='buttonSection'>
          <input className='loginButton' type='submit' value='Submit'></input>
          <button className='loginButton' type='button' onClick={this.props.setLoginState}>Back</button>
        </section>
      </form>
    );
  }
}

export default RegisterForm;