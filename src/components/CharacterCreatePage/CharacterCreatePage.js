import React from 'react';

import CharacterCreateNav from './CharacterCreateNav';
import CharacterCreateDetails from './CharacterCreateDetails';
import CharactersAPIService from '../../services/characters-api-service';

import './CharacterCreatePage.css';

class CharacterCreatePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentActive: 'details',
      characterInfo: {
        charName: '',
        charRace: '',
        charClass: '',
        charDesc: ''
      }
    };
  }

  resetFields = () => {
    
  }

  setCurrentActive = (currentActive) => {
    this.setState({
      currentActive
    });
  }

  setCharacterInfo = (characterInfo) => {
    this.setState({
      characterInfo
    });
  }

  addCharacter = (newCharacter) => {
    CharactersAPIService.addCharacter(newCharacter);
  }


  handleFormSubmit = (e) => {
    e.preventDefault();

    const charName = e.target.charName.value;
    const charRace = e.target.charRace.value;
    const charClass = e.target.charClass.value;
    const charDesc = e.target.charDesc.value;

    this.addCharacter({
      charName,
      charRace,
      charClass,
      charDesc
    });
  }

  render() {
    const characterCreateComponents = {
      details: <CharacterCreateDetails />,
      abilityScores: <div>Ability Scores</div>,
      classFeatures: <div>Class Features</div>,
      spellsList: <div>Spells List</div>,
      equipment: <div>Equipment</div>
    };

    return (
      <section className='characterCreatePage'>
        <CharacterCreateNav
          setCurrentActive={this.setCurrentActive}
          currentActive={this.state.currentActive}
        />

        <form className='characterCreateForm'
          onSubmit={this.handleFormSubmit}
        >
          {characterCreateComponents[this.state.currentActive]}
          <section className='submitSection'>
            <button type='submit'>Submit</button>
            <button type='reset' onClick={this.cancelButtonClick}>Cancel</button>
          </section>
        </form>
      </section >
    );
  }
}

export default CharacterCreatePage;