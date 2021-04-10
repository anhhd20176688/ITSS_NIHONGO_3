import axios from 'axios';
import { browserHistory } from 'react-router';

import { 
  FETCH_TODOS, 
  DELETE_TODO, 
  TODO_ERROR, 
  FETCH_TODO,
  CREATE_TODO,
  UPDATE_TODO
} from './types';

const API_URL = 'http://localhost:3000';

export function createTodo(props) {
  return (dispatch) => {
    axios.post(`${API_URL}/todos`, props)
      .then(response => {
        dispatch({
          type: CREATE_TODO,
          payload: response.data.todo
        });
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(todoError(error.response.data.error));
      });
  };
}

export function todoError(error) {
  return (dispatch) => {
    dispatch({
      type: TODO_ERROR,
      payload: error
    });
  };
}
