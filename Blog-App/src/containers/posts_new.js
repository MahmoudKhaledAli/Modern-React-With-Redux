import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { touched, error } = field.meta;
    const className = `form-group${touched && error ? ' has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.addPost(values, () => this.props.history.push('/'));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field component={this.renderField} label="Title" name="title" />
        <Field component={this.renderField} label="Categories" name="categories" />
        <Field component={this.renderField} label="Post Content" name="content" />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter a post title';
  }
  if (!values.categories) {
    errors.categories = 'Please enter some categories';
  }
  if (!values.content) {
    errors.content = 'Post cannot be empty';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  validate: validate
})(connect(null, { addPost })(PostsNew));