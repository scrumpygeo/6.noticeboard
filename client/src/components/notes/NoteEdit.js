import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote, editNote } from '../../actions';
import NoteForm from './NoteForm';

class NoteEdit extends Component {
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editNote(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.note) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Notice</h3>
        <NoteForm
          initialValues={_.pick(this.props.note, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { note: state.notes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchNote, editNote })(NoteEdit);
