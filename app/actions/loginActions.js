

import axios from 'axios';
import setAuthToken from './setAuthToken';
import jwt from 'jsonwebtoken';
import {SET_CURRENT_USER} from './types'

/*
 * Login-Function
 * 
 * new Reducer added, to have information about the currently
 * active user, used by currentUserReducer
 * 
 * 
 */

export function setCurrentUserBook(user){
    return{
           type: BOOKING_LOGIN_USER,
           payload: user
    }    
}
export function setCurrentUser(user) {
    return{
        type: SET_CURRENT_USER,
        payload: user
    };

}


/*
 * LoginFunction
 * Checks login, provides token (stored in local storage)
 * and active user information, for redux-store (currentUserReducer)
 */
export function login(userData) {
    return dispatch =>{
        return axios({
            method: 'post',
            url: 'https://10.18.2.151/api/login',
            headers: {'Content-Type': 'application/json'},
            data: userData
        }).then(function (response) {
            localStorage.setItem('jwtToken', response.data.token);
            setAuthToken(response.data.token);
            console.log(jwt.decode(response.data.token));
            dispatch(setCurrentUser(jwt.decode(response.data.token)));
            //dispatch(setCurrentUserBook(jwt.decode(response.data.token)));
        });
    };
}