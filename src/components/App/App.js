import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HamburgerMenu from '../Hamburger/HamburgerMenu';
import CharacterList from '../CharacterList/CharacterList';
import CharacterSheet from '../Character/CharacterSheet';
import CharacterCreatePage from '../CharacterCreatePage/CharacterCreatePage';
import LoginPage from '../Login/LoginPage';
import NotFoundPage from '../NotFound/NotFoundPage';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import LandingPageRoute from '../Utils/LandingPageRoute';

class App extends React.Component {

  render() {
    return <>
      <div className='parallax'>

        <HamburgerMenu />
        <main className='app'>
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPageRoute}
            />
            <PublicOnlyRoute
              exact
              path={'/login'}
              component={LoginPage}
            />
            <PrivateRoute
              exact
              path={'/characters'}
              component={CharacterList}
            />
            <PrivateRoute
              exact
              path={'/characters/create'}
              component={CharacterCreatePage}
            />
            <PrivateRoute
              exact
              path={'/characters/:charId'}
              component={CharacterSheet}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>

    </>;
  }
}

export default App;