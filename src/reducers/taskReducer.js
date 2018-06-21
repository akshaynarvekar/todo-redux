import { FETCH_TASKS, ADD_NEW_TASK, EDIT_TASK, DELETE_TASK,COMPLETE_TASK } from '../actions/type';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS:
    case ADD_NEW_TASK:
    case DELETE_TASK:
    case EDIT_TASK:
    case COMPLETE_TASK:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
