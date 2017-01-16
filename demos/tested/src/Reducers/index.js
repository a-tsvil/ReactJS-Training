import {
  combineReducers
} from 'redux';

import {
  ADD_DATA,
  REMOVE_DATA,
  REQUEST_DATA,
  GET_DATA,
  UPDATE_DATA
} from '../Actions';

const dataHandler = (state = {
  data: []
}, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isPending: true
      }
    case GET_DATA:
      return {
        ...state,
        isPending: false,
        data: action.data,
        recievedAt: action.timeStamp
      }
    case UPDATE_DATA:
      return {
        ...state,
        isPending: false,
        data: action.data,
        updatedAt: action.timeStamp
      }
    case ADD_DATA:
      return {
        ...state,
        isPending: false,
        data: action.data,
        addedAt: action.timeStamp
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataHandler
});

export default dataHandler;
