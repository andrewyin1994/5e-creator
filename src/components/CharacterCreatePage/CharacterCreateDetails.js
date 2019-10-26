import React from 'react';

class CharacterCreateDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charCount: 0
    };
  }


  updateCharLimit = () => {
    this.setState({
      charCount: document.getElementById('charDesc').value.length
    });
  }

  render() {
    return (
      <div className='characterCreateDetails'>
        <label htmlFor='charName'>Name: </label>
        <input 
          type='text' 
          id='charName' 
          name='charName' 
          maxLength={50}
          required
        />
        
        <label htmlFor='charRace'>Race: </label>
        <input 
          type='text' 
          id='charRace' 
          name='charRace' 
          maxLength={50}
          required 
        />
        
        <label htmlFor='charClass'>Class: </label>
        <input 
          type='text' 
          id='charClass' 
          name='charClass' 
          maxLength={50}
          required
        />
        
        <label htmlFor='charDesc'>Description: </label>
        <textarea 
          id='charDesc' 
          name='charDesc' 
          onKeyUp={this.updateCharLimit}
          maxLength={500}
        />
        <span>{this.state.charCount} / 500</span>
      </div>
    );
  }
}

export default CharacterCreateDetails;