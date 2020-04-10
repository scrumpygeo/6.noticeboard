import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions';

class NoteList extends Component {
  componentDidMount() {
    this.props.fetchNotes();
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
          <div className='card-footer'>hello</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2 className='text-center mb-3 py-2'>Notices</h2>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { notes: Object.values(state.notes) };
};

export default connect(mapStateToProps, { fetchNotes })(NoteList);
