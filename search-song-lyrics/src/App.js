import React, { Component } from 'react';
import classes from './App.css';

import SearchForm from './containers/SearchForm/SearchForm';
import LyricsResult from './containers/LyricsResult/LyricsResult';

class App extends Component {
  state = {
    lyrics: 'testing'
  };

  updateLyrics = (lyrics) => {
    this.setState({lyrics: lyrics});
  }

  render() {
    return (
      <div className={classes.App}>
        <h1 className={classes.App__Title}>Songs Lyrics Search</h1>
        <div className={classes.App__Content}>
          <SearchForm updateLyrics={this.updateLyrics} />
          <LyricsResult lyrics={this.state.lyrics} />
        </div>
      </div>
    );
  }
}

export default App;
