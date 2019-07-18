import {
  GET_SYSTEMS,
  DELETE_SYSTEMS,
  ADD_SYSTEMS,
  CLEAR_SYSTEMS
} from "../actions/types.js";

const initialState = {
  systems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SYSTEMS:
      return {
        ...state,
        systems: action.payload
      };
    case DELETE_SYSTEMS:
      return {
        ...state,
        systems: state.systems.filter(system => system.id !== action.payload)
      };
    case ADD_SYSTEMS:
      return {
        ...state,
        systems: [...state.systems, action.payload]
      };
    case CLEAR_SYSTEMS:
      return {
        ...state,
        systems: []
      };
    default:
      return state;
  }
}
