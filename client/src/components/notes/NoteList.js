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
          <div className='btn btn-primary'>Edit</div>
          <div className='btn btn-danger'>Delete</div>
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
          <div className='card-header text-center'>{note.title}</div>
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
        <div>{this.renderCreate()}</div>
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
