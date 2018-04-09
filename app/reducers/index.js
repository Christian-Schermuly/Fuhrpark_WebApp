/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * combineReducers for access
 */

import { combineReducers } from "redux"

import carRed from "./carReducer"
import userRed from "./userReducer"
import bookingRed from "./bookingReducer"
import currentUserRed from "./currentUserReducer"

export default combineReducers({
        car: carRed,
        user: userRed,
        booking: bookingRed,
        current: currentUserRed,
})