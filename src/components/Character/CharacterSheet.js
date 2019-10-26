import React from 'react';

import CharacterListContext from '../../contexts/CharacterListContext';
import CharacterAPIService from '../../services/characters-api-service';

import './CharacterSheet.css';

class CharacterSheet extends React.Component {
  static contextType = CharacterListContext;

  async componentDidMount() {
    try {
      const characters = await CharacterAPIService.getAllCharacters();
      this.context.setCharactersList(characters);
    }
    catch (e) {
      this.context.setError(e);
    }
  }

  calculateStatMod(stat) {
    const mod = Math.floor((stat - 10) / 2);
    return `${mod > 0 ? '+': ''}${mod}`; 
  } 

  render() {
    const charId = this.props.match.params.charId;
    const character = this.context.characters.find(character => character.charId === charId);
    let imgUrl = null;
    try {
      const charClass = character.charClass.toLowerCase();
      imgUrl = require(`../../images/${charClass}.jpeg`);
    }
    catch (e) {
      imgUrl = require('../../images/ua.jpeg');
    }

    return (
      <div className='characterSheet'>
        {character
          ? <section id='charInfo'>
            <img src={imgUrl} alt={character.charClass}></img>
            <div id='charDetails'>
              <h3 id='charName'>{character.charName}</h3>
              <p id='charRace'>{character.charRace}</p>
              <p id='charClass'>{character.charClass}</p>
            </div>
            
            <p id='charDesc'>{character.charDesc}</p>

            <ul id='characterSheetStats'>
              <li id='sheetStat'>
                <span className='statLabel'>Str</span>
                <span className='statMod'>{this.calculateStatMod(character.strength)}</span>
                <span className='statValue'>({character.strength})</span>
              </li>
              <li className='sheetStat'>
                <span className='statLabel'>Dex</span>
                <span className='statMod'>{this.calculateStatMod(character.dexterity)}</span>
                <span className='statValue'>({character.dexterity})</span>
              </li>
              <li className='sheetStat'>
                <span className='statLabel'>Con</span>
                <span className='statMod'>{this.calculateStatMod(character.constitution)}</span>
                <span className='statValue'>({character.constitution})</span>
              </li>
              <li className='sheetStat'>
                <span className='statLabel'>Int</span>
                <span className='statMod'>{this.calculateStatMod(character.intelligence)}</span>
                <span className='statValue'>({character.intelligence})</span>
              </li>
              <li className='sheetStat'>
                <span className='statLabel'>Wis</span>
                <span className='statMod'>{this.calculateStatMod(character.wisdom)}</span>
                <span className='statValue'>({character.wisdom})</span>
              </li>
              <li className='sheetStat'>
                <span className='statLabel'>Cha</span>
                <span className='statMod'>{this.calculateStatMod(character.charisma)}</span>
                <span className='statValue'>({character.charisma})</span>
              </li>
            </ul>
          </section>
          :<section>
            <p>Character not found.</p>
          </section>}
        <button id='goBackButton' onClick={() => this.props.history.goBack()}>Back</button>
      </div>
    );
  }
}

export default CharacterSheet;