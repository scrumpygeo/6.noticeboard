import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchNote, deleteNote } from '../../actions';

class NoteDelete extends Component {
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
  }

  // these actions are for buttons on modal
  renderActions() {
    const id = this.props.match.params.id;

    return (
      <>
        <button
          onClick={() => this.props.deleteNote(id)}
          type='button'
          className='btn btn-danger'
          data-dismiss='modal'
        >
          Delete
        </button>
        <Link to={'/'} type='button' className='btn btn-secondary'>
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.note) {
      return 'Are you sure you want to delete this notice?';
    }

    return `Are you sure you want to delete notice ${this.props.note.title}?`;
  }

  render() {
    return (
      <Modal
        title='Delete Notice'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { note: state.notes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchNote, deleteNote })(NoteDelete);
