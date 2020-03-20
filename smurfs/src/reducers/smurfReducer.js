import { GET_SMURFS, FETCH_DATA, ADD_SMURF, RESET_FORM } from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isAdding: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  console.log("ACTION DISPATCHED", action.type);
  console.log("PAYLOAD", action.payload);
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching: true
      };
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        isAdding: false
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isAdding: true
      };
    case RESET_FORM:
      return{
        ...state,
        isAdding: false
      }
    default:
      return state;
  }
};
