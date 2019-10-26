import React from 'react';

const CharacterListContext = React.createContext({
  characters: [],
  validClasses: [
    'barbarian',
    'bard',
    'cleric',
    'druid',
    'fighter',
    'monk',
    'paladin',
    'sorcerer',
    'warlock',
    'wizard'
  ],
  error: null,
  setError: () => { },
  clearError: () => { },
  setCharactersList: () => { }
});

class CharacterListProvider extends React.Component {
  state = {
    characters: [],
    error: null,
    validClasses: [
      'barbarian',
      'bard',
      'cleric',
      'druid',
      'fighter',
      'monk',
      'paladin',
      'sorcerer',
      'warlock',
      'wizard'
    ]  
  }

  setCharactersList = characters => {
    this.setState({ characters });
  }

  setError = error => {
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  render() {
    const value = {
      characters: this.state.characters,
      validClasses: this.state.validClasses,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCharactersList: this.setCharactersList
    };

    return <CharacterListContext.Provider value={value}>
      {this.props.children}
    </CharacterListContext.Provider>;
  }
}

export default CharacterListContext;

export { CharacterListProvider };