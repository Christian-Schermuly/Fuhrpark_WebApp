/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * current user reducer, stores information on the current user
 * for further use
 */
import isEmpty from 'lodash.isempty'
import {browserHistory} from 'react-router';

export default function reducer(state={
        isAuthenticated: false,
        user:{},
        
    
}, action) {
    switch(action.type){
        case "SET_CURRENT_USER":{
                state={...state, user: action.payload, isAuthenticated: !isEmpty(action.payload)}
        }
    }
    return state;
};