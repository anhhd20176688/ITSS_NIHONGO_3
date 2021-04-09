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


export function todoError(error) {
  return (dispatch) => {
    dispatch({
      type: TODO_ERROR,
      payload: error
    });
  };
}
