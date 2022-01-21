import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const ADD_SMURF = 'ADD_SMURF' 
export const FETCH_ERROR = 'FETCH_ERROR'

export const fetchSmurfs = (dispatch) => {
    return (dispatch) => {
        axios.get('http://localhost:3333/smurfs')
        .then((res) => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: FETCH_ERROR, payload: err.message })
        })
    }
}


//     dispatch({ type: FETCH_START })
//     axios.get('http://localhost:3333/smurfs')
//         .then((res) => {
//             dispatch({ type: FETCH_SUCCESS, payload: res.data })
//         })
//         .catch((err) => {
//             dispatch({ type: FETCH_ERROR, payload: err.message })
//         })
// };

export const addSmurf = (smurf) => {
    return ({
        type: ADD_SMURF,
        payload: smurf
    })
}

export const fetchError = (err) => {
    return ({
        type: FETCH_ERROR,
        payload: err
    })
}