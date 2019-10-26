import React from 'react';

import CharacterCreateDetails from './CharacterCreateDetails';
import CharacterCreateAbilityScores from './CharacterCreateAbilityScores';
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

  addCharacter = async (newCharacter) => {
    await CharactersAPIService.addCharacter(newCharacter);
  }


  handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newChar = {};

    formData.forEach((value, key) => newChar[key] = value);
    
    await this.addCharacter(newChar);
    this.props.history.goBack();
  }

  render() {
    const characterCreateComponents = {
      details: <CharacterCreateDetails />,
      abilityScores: <CharacterCreateAbilityScores />
    };

    return (
      <section className='characterCreatePage'>
        <form className='characterCreateForm'
          onSubmit={this.handleFormSubmit}
        >
          <h1>Create a New Character</h1>
          <h3>Character Details</h3>
          {characterCreateComponents.details}

          <h3>Ability Scores</h3>
          {characterCreateComponents.abilityScores}
          <section className='submitSection'>
            <button type='submit'>Submit</button>
            <button type='reset' onClick={() => this.props.history.goBack()}>Cancel</button>
          </section>
        </form>
      </section >
    );
  }
}

export default CharacterCreatePage;