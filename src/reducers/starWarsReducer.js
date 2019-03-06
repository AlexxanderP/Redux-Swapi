import {  FETCHING_CHARACTERS_START,
          FETCHING_CHARACTERS_SUCCESS,
          FETCHING_CHARACTERS_FAILURE } from "../actions";


const initialState = {
  characters: [],
  fetching: false,
  error: ''
};

export const charsReducer = (state = initialState, action) => {
  console.log('reducer', action);
    switch (action.type) {
      case FETCHING_CHARACTERS_START:
        return {

        };
      
      case FETCHING_CHARACTERS_SUCCESS:
        return {

        };

      case FETCHING_CHARACTERS_FAILURE:
        return {

        };

    default:
      return state;
  }
};
