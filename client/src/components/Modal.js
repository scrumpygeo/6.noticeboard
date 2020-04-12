import React from 'react';
import ReactDOM from 'react-dom';

export const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss}>
      <div
        className='modal-dialog'
        role='document'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal-content'>
          <div className='modal-header bg-light'>
            <h5 className='modal-title'>{props.title}</h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <p>{props.content}</p>
          </div>
          <div className='modal-footer bg-light'>{props.actions}</div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
