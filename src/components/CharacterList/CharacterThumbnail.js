import React from 'react';
import { Link } from 'react-router-dom';

import './CharacterThumbnail.css';

class CharacterThumbnail extends React.Component {
  static defaultProps = {
    charId: 0,
    charName: '',
    charRace: '',
    charClass: '',
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10
  }
  
  render() {
    const charClass = this.props.charClass.toLowerCase();
    let imgUrl = null;
    try {
      imgUrl = require(`../../images/${charClass}.jpeg`);
    }
    catch (e) {
      imgUrl = require('../../images/ua.jpeg');
    }

    return (
      <Link className='link' to={`/characters/${this.props.charId}`}>
        <li className="characterThumbnail">
          <img src={imgUrl} alt={this.props.charClass} />
          <div className='characterInfo'>
            <h3>{this.props.charName}</h3>
            <p>{this.props.charRace}</p>
            <p>{this.props.charClass}</p>  
          </div>
          <ul className='characterStats'>
            <li className='stat'>Str<br/>{this.props.strength}</li>
            <li className='stat'>Dex<br/>{this.props.dexterity}</li>
            <li className='stat'>Con<br/>{this.props.constitution}</li>
            <li className='stat'>Int<br/>{this.props.intelligence}</li>
            <li className='stat'>Wis<br/>{this.props.wisdom}</li>
            <li className='stat'>Cha<br/>{this.props.charisma}</li>
          </ul>
        </li>
      </Link>
    );
  }
}

export default CharacterThumbnail;
