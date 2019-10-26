import React from 'react';

class CharacterCreateAbilityScores extends React.Component {

  render() {
    return (
      <ul className='characterCreateAbilityScores'>
        <li>
          <label htmlFor='str'>Strength</label>
          <input id='str' name='strength' type='number' min='1' max='30' defaultValue='10'></input>
        </li>
        <li>
          <label htmlFor='dex'>Dexterity</label>
          <input id='dex' name='dexterity' type='number' min='1' max='30' defaultValue='10'></input>
        </li>
        <li>
          <label htmlFor='con'>Constitution</label>
          <input id='con' name='constitution' type='number' min='1' max='30' defaultValue='10'></input>
        </li>
        <li>
          <label htmlFor='int'>Intelligence</label>
          <input id='int' name='intelligence' type='number' min='1' max='30' defaultValue='10'></input>
        </li>
        <li>
          <label htmlFor='wis'>Wisdom</label>
          <input id='wis' name='wisdom' type='number' min='1' max='30' defaultValue='10'></input>
        </li>
        <li>
          <label htmlFor='cha'>Charisma</label>
          <input id='cha' name='charisma' type='number' min='1' max='30' defaultValue='10'></input>
        </li>
      </ul>
    );
  }
}

export default CharacterCreateAbilityScores;