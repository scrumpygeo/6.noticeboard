import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const NoteDelete = () => {
  // these actions are for buttons on modal
  const actions = (
    <>
      <button type='button' className='btn btn-danger' data-dismiss='modal'>
        Delete
      </button>
      <button type='button' className='btn btn-secondary'>
        Cancel
      </button>
    </>
  );

  return (
    <div>
      Delete
      <Modal
        title='Delete Notice'
        content='Are you sure you want to delete this notice?'
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

export default NoteDelete;
