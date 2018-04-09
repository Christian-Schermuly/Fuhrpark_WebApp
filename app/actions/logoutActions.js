/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import axios from 'axios';
import setAuthToken from './setAuthToken';
import jwt from 'jsonwebtoken';
import {SET_CURRENT_USER, LOGOUT_REQUEST, LOGOUT_SUCCESS} from './types'
import { Route, Redirect } from 'react-router'

/*
 * Logout clears the currentUserReducer
 * currently not used
 */

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}



export function logout(){

 //   dispatch(requestLogout());
    console.log(localStorage.jwtToken);
    localStorage.removeItem('jwtToken');
    console.log(localStorage.jwtToken);
    <Redirect to="/login/"></Redirect>;
//    dispatch(receiveLogout());
  };
