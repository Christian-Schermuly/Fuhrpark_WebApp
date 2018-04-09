/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * Actions for bookingReducer
 * used in book.js, to gather 
 * necessery information for
 * booking
 */


export function bookingSetUser(id){
    return{
        type: 'BOOKING_CHANGE_USER',
        payload: id,
    }
}

export function bookingSetCarID(id){
    return{
        type: 'BOOKING_CHANGE_CAR',
        payload: id,
    }
}

export function bookingSetStartDate(time){
    return{
        type: 'BOOKING_CHANGE_STARTDATE',
        payload: time
    }
 }
    
export function bookingSetEndDate(time){

    return{
        type: 'BOOKING_CHANGE_ENDDATE',
        payload: time
    }
}
export function bookingSetStartTime(time){
    return{
        type: 'BOOKING_CHANGE_STARTTIME',
        payload: time,
    }
}

export function bookingSetEndTime(time){
    return{
        type: 'BOOKING_CHANGE_ENDTIME',
        payload: time,
    }
}