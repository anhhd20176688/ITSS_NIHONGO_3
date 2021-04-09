import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { Alert } from 'react-bootstrap';

import PageContainer from '../components/PageContainer';
import Portlet from '../components/Portlet';
import TodoForm from '../components/TodoForm';

class TodoContainer extends Component {


  handleInitialize({ text, completed }) {
    this.props.initialize('todo', {
      text,
      completed
    });
  }



  componentWillReceiveProps(nextProps) {
    this.handleInitialize(nextProps.todo);
  }

  renderAlert() {
    if (this.props.error) {
      return (      
        <div className="margin-top-25px">
          <Alert bsStyle="danger">
            <strong>Oops!</strong> {this.props.error}
          </Alert>
        </div>
      );
    }
  }

  render() {
    return (
      <PageContainer>
        <Portlet title="Todo">
          <div>

          </div>
           {this.renderAlert()}         
        </Portlet>
      </PageContainer>
    );
  }
}

TodoContainer.propTypes = {

  initialize: PropTypes.func.isRequired,
  todo: PropTypes.object,
  error: PropTypes.string
};

function mapStateToProps(state) {
  return { 
    todo: state.todos.todo,
    error: state.todos.error
  };
}

export default connect(mapStateToProps, {

  initialize 
})(TodoContainer);
