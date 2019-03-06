import {  FETCHING_CHARACTERS_START,
          FETCHING_CHARACTERS_SUCCESS,
          FETCHING_CHARACTERS_FAILURE } from "../actions";


const initialState = {
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  console.log('reducer', action);
    switch (action.type) {
      case FETCHING_CHARACTERS_START:
        return {
          ...state,
          fetching: true
        };
      
      case FETCHING_CHARACTERS_SUCCESS:
        return {
          
          characters:  [...state.characters, ...action.payload],
          error: '',
          fetching: false,
        };

      case FETCHING_CHARACTERS_FAILURE:
        return {
          ...state,
          error: action.payload,
          fetching: false,
          
        };

    default:
      return state;
  }
};
