import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NoteCreate extends Component {
  renderInput({ input, label }) {
    return (
      <div className='form-group'>
        <label>{label}</label>
        <input className='form-control' {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

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

export default reduxForm({
  form: 'noteCreate',
})(NoteCreate);
