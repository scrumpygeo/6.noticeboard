import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote } from '../../actions';

class NoteEdit extends Component {
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
  }
  render() {
    if (!this.props.note) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.note.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { note: state.notes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchNote })(NoteEdit);
