import React from 'react';
import AuthAPIService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import config from '../config';

const UserContext = React.createContext({
  loggedIn: false,
  error: null,
  updateLoginState: () => { },
  login: () => { },
  logout: () => { },
  register: () => { }
});

class UserProvider extends React.Component {
  state = {
    loggedIn: false,
    error: null
  }

  updateLoginState = () => {
    this.setState({
      error: null,
      loggedIn: TokenService.hasAuthToken()
    });
  }

  login = async (cred) => {
    try {
      const res = await AuthAPIService.postLogin(cred);

      TokenService.saveAuthToken(res.authToken);
      this.updateLoginState();
    }
    catch (e) {
      this.setState({ error: e.error });
    }
  }

  logout = () => {
    TokenService.clearAuthToken();
    this.updateLoginState();
  }

  register = async (user) => {
    console.log(user);
    try {
      await fetch(`${config.API_ENDPOINT}/register`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      });
    }
    catch (e) {
      this.setState({
        error: e.message
      });
    }
  }

  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      error: this.state.error,
      updateLoginState: this.updateLoginState,
      login: this.login,
      logout: this.logout,
      register: this.register
    };

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContext;
export { UserProvider };