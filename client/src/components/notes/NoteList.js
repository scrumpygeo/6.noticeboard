import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions';
import { Link } from 'react-router-dom';

class NoteList extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  renderAdmin(note) {
    if (note.userId === this.props.currentUserId) {
      return (
        <div className='d-flex justify-content-between'>
          <Link to={`/notes/edit/${note.id}`} className='btn btn-primary'>
            Edit
          </Link>
          <Link to={`/notes/delete/${note.id}`} className='btn btn-danger'>
            Delete
          </Link>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to='/notes/new' className='btn btn-success'>
            Create Notice
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.notes.map((note) => {
      return (
        <div key={note.id} className='card my-2'>
          <div className='card-header text-center'>
            <strong>{note.title}</strong>
          </div>
          <div className='card-body'>
            <i className='fas fa-flag mr-3' />
            {note.description}
          </div>
          <div className='card-footer'>{this.renderAdmin(note)}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2 className='text-center mb-3 py-2'>Notices</h2>
        <div>{this.renderList()}</div>
        <div
          className='d-flex justify-content-center'
          style={{ position: 'sticky', bottom: '5px' }}
        >
          {this.renderCreate()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: Object.values(state.notes),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchNotes })(NoteList);
