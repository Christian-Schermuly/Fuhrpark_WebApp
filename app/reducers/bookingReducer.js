/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * reducer for booking-actions
 * used to store date/user/car for booking
 */
import isEmpty from 'lodash.isempty'
import {browserHistory} from 'react-router';

export default function reducer(state={
        user: null,
        car: null,
        startTime: null,
        endTime: null,
        
}, action) {
    switch(action.type){
        case "BOOKING_CHANGE_USER":{
                state = {...state, user: action.payload}
                break;
        }
                case "BOOKING_LOGIN_USER":{
                state = {...state, user: action.payload}
                break;
        }
        case "BOOKING_CHANGE_CAR":{
                state = {...state, car: action.payload}
                break;
        }
        case "BOOKING_CHANGE_STARTDATE":{
                state = {...state, startTime: action.payload}
                break;                 
        }
        case "BOOKING_CHANGE_ENDDATE":{
                state = {...state, endTime: action.payload}
                break;
        }
        case "BOOKING_CHANGE_STARTTIME":{
                //state = {...state, startTime: action.payload}
                break;
        }
        case "BOOKING_CHANGE_ENDTIME":{
                //state = {...state, endTime: action.payload}
                break;
        }
    }
    return state;
};