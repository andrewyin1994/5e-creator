import React from 'react';
import { Link } from 'react-router-dom';

// import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './HamburgerMenu.css';

class Hamburger extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  openSideNav = () => {
    // document.getElementById('sideNav').style.width = '200px';
    this.setState({
      active: true
    });
  }

  closeSideNav = () => {
    // document.getElementById('sideNav').style.width = '0';
    this.setState({
      active: false
    });
  }

  componentDidMount() {
    this.context.updateLoginState();
  }

  render() {
    return <>
        <nav className='top-nav frosted-glass'>
          <section className='navbar-content'>
            {this.context.loggedIn &&
              <span className='hamburger' onClick={this.openSideNav}>
                <div className='hamburger-bar'></div>
                <div className='hamburger-bar'></div>
                <div className='hamburger-bar'></div>
              </span>}
            <h3 className='navbar-header'>5e Stuff</h3>
          </section>
        </nav>

      <nav id='sideNav' className={'side-nav frosted-glass' + (this.state.active ? ' active' : '')}>
        <span className='nav-close' onClick={this.closeSideNav}>
          <button id='closeBtn' className='closeBtn' >&times;</button>
        </span>
        <Link to={'/characters'}>
          <button id='characters' className='nav-link' onClick={() => this.closeSideNav()}>Characters</button>
        </Link>
        <Link to={'/characters/create'}>
          <button id='create' className='nav-link' onClick={() => this.closeSideNav()}>Create</button>
        </Link>
        <Link to={'/'}>
          <button id='logout' className='nav-link' onClick={() => {
            this.closeSideNav();
            this.context.logout();
          }}>Logout</button>
        </Link>
      </nav>
    </>;
  }
}

export default Hamburger; 