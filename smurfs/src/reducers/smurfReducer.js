import { UPDATE_SMURFS, FETCH_DATA, ADD_SMURF } from "../actions";

//May be able to make an axios for state but id like to avoid it

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  console.log("ACTION DISPATCHED", action);
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching: true
      };
    case UPDATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      };
    default:
      return state;
  }
};
