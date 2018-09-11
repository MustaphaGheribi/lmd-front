import axios from 'axios'; 
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { SET_CURRENT_USER, GET_ERRORS } from '../constants';
export const registerUser = (userData, history) => dispatch => {
    axios.post('http://localhost:3001/api/patient/signup', userData)
    .then(user => {
        history.push('/login');
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })    
    });
};

export const loginUser = (userData) => dispatch => {
    axios.post('http://localhost:3001/api/patient/auth', userData)
        .then(user => {
            console.log(user.data);
            // Get token
            const token = user.data;
            // set to localStorage
            localStorage.setItem('jwtToken', token);
            // set token to auth header
            setAuthToken(token);
            // Decode token
            const decoded = jwt_decode(token);
            // set current user
             dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        });
};
//set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};

export const logoutUser = () => dispatch => {
    // remove token from localStorage
    localStorage.removeItem('jwtToken');
    // remove the auth header for future requests.
    setAuthToken(false);
    // set current User to an empty Object which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
}
