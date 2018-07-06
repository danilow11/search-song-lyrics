import React, { Component } from 'react';
import axios from 'axios';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import FeedbackMessage from '../../components/UI/FeedbackMesage/FeedbackMessage';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './SearchForm.css';

class SearchForm extends Component {
  state = {
    searchForm: {
      artist: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Artist'
        },
        label: 'Artist',
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      song: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Song Name'
        },
        label: 'Song',
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    loading: false
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedSearchForm = {
      ...this.state.searchForm
    };
    const updatedFormElement = {
      ...updatedSearchForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedSearchForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedSearchForm) {
      formIsValid = updatedSearchForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ searchForm: updatedSearchForm, formIsValid: formIsValid });
  }

  searchLyrics = (event) => {
    event.preventDefault();

    const artist = this.state.searchForm.artist.value;
    const song = this.state.searchForm.song.value;

    axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then(response => {
        this.props.updateLyrics(response.data.lyrics);
      })
      .catch(error => {
        // this.setState({ error: true });
      });
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.searchForm) {
      formElementsArray.push({
        id: key,
        config: this.state.searchForm[key]
      });
    }
    let form = (
      <form onSubmit={this.searchLyrics}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            label={formElement.config.label}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>Search</Button>
      </form>
    );

    return (
      <div className={classes.FormContainer}>
        <h2>Search by song and artist:</h2>
        {form}
      </div>
    );
  }
}

export default SearchForm;