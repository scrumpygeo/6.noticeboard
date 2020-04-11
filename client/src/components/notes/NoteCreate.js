import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions';
import NoteForm from './NoteForm';

class NoteCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createNote(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Notice</h3>
        <NoteForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createNote })(NoteCreate);
