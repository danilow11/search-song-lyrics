import React from 'react';
import classes from './Lyrics.css';
import Spinner from '../UI/Spinner/Spinner';

const lyricsResult = (props) => {
  let lyrics = props.loading ? <Spinner /> :
    <p className={classes.LyricsContainer__Text}>
      {props.lyrics === false ? 'No lyrics found!' : props.lyrics}
    </p>;

  return(
    <div className={classes.LyricsContainer}>
      <h2 className={classes.LyricsContainer__Title}>Lyrics:</h2>
      {lyrics}
    </div>
  );
};

export default lyricsResult;