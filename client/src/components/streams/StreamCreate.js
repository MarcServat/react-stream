import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import {connect} from "react-redux";
import {createStream} from "../../actions";

class StreamCreate extends Component {
  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
        <div className={className}>
          <label>{label}</label>
          <input {...input} autoComplete="off"/>
            {this.renderError(meta)}
        </div>
    );
  };

  renderError({error, touched}) {
      if(error && touched) {
          return (<div className="ui error message">{error}</div>);
      }
  }

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error">
          <Field name="title"
                 component={this.renderInput}
                 label="Enter Title" />
          <Field name="description"
                 component={this.renderInput}
                 label="Enter description" />
                 <button className="ui button primary">Submit</button>
        </form>
    );
  }

}

const validate = (values) => {
    const errors = {};
    if(!values.title) {
        errors.title = 'You must enter a title';
    }
    if(!values.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
};

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);
