import React from 'react';
import PropTypes from 'prop-types';


class CharacterCreateNav extends React.Component {
  static defaultProps = {
    setCurrentActive: () => { },
    currentActive: 'details'
  }

  static propTypes = {
    setCurrentActive: PropTypes.func,
    currentActive: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      tabOptions: {
        details: 'Details',
        abilityScores: 'Ability Scores',
        // classFeatures: 'Class Features',
        // spellsList: 'Spells List',
        // equipment: 'Equipment'
      }
    };
  }

  render() {
    const tabOptions = Object.keys(this.state.tabOptions).map((option, index) => {
      return (
        <li
          className={'characterCreateTabs' + (option === this.props.currentActive ? ' active' : '')}
          key={index}
          id={option}
          onClick={() => this.props.setCurrentActive(option)}
        >
          {this.state.tabOptions[option]}
        </li>
      );
    });

    return (
      <nav>
        <ul className={'characterCreateNav'}>
          {tabOptions}
        </ul>
      </nav>
    );
  }
}

export default CharacterCreateNav;