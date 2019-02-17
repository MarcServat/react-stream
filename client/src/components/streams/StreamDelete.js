import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  actions() {
    return (
      <div className="actions">
        <button
          className="ui primary button"
          onClick={() => this.props.deleteStream(this.props.stream.id)}
        >
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </div>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return `Are you sure you want to delete this stream?`;
    }

    return `Are you sure you want to delete: \n ${this.props.stream.title}?`;
  }

  render() {
    return (
      <Modal
        onDismiss={() => history.push("/")}
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.actions()}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return { stream: state.streams[props.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
