import React, { Component } from 'react';
import classes from './App.css';

import SearchForm from './containers/SearchForm/SearchForm';
import LyricsResult from './components/Lyrics/Lyrics';

class App extends Component {
  state = {
    lyrics: '',
    loading: false
  };

  updateLyrics = (lyrics) => {
    this.setState({lyrics: lyrics});
  }

  updateLoading = (loading) => {
    this.setState({loading: loading});
  }

  render() {
    return (
      <div className={classes.AppWrapper}>
        <div className={classes.App}>
          <h1 className={classes.App__Title}>Songs Lyrics Search</h1>
          <div className={classes.App__Content}>
            <SearchForm updateLyrics={this.updateLyrics} updateLoading={this.updateLoading} />
            <LyricsResult lyrics={this.state.lyrics} loading={this.state.loading} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
