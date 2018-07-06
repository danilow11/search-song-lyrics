import React, { Component } from 'react';

import Lyrics from '../../components/Lyrics/Lyrics';

class LyricsResult extends Component {
  render() {
    return (
      // class Lyrics-Result
      <div> 
        <h2>Lyrics:</h2>
        <Lyrics lyrics={this.props.lyrics} />
      </div>
    );
  }
}

export default LyricsResult;