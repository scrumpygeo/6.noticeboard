import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createNote } from '../../actions'; // action creator

class NoteCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='alert alert-danger mt-2' role='alert'>
          {error}
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `form-control ${
      meta.error && meta.touched ? 'alert alert-danger' : ''
    }`;
    return (
      <div className='form-group'>
        <label>{label}</label>
        <input className={className} {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createNote(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'noteCreate',
  validate: validate,
})(NoteCreate);

export default connect(null, { createNote })(formWrapped);
