import axios from 'axios';

export const FETCHING_CHARACTERS_START = 'FETCHING_CHARACTERS_START';
export const FETCHING_CHARACTERS_SUCCESS = 'FETCHING_CHARACTERS_SUCCESS';
export const FETCHING_CHARACTERS_FAILURE = 'FETCHING_CHARACTERS_FAILURE';



export const getCharacters = () => dispatch => {
    dispatch({ type: FETCHING_CHARACTERS_START });
        axios
            .get('https://swapi.co/api/people/')
            .then(res => {
                dispatch({ type:FETCHING_CHARACTERS_SUCCESS, 
                    payload: res.data.results});
            })
            .catch(err => {
                dispatch({
                    type: FETCHING_CHARACTERS_FAILURE, 
                    payload:err.response.data.message
                });
            });
};


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
