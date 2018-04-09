/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * Reducer for car-data
 * used to select cars from table
 */


export default function reducer(state={
        car : {},
        
    
}, action) {
    switch(action.type){
        case "CHANGE_CAR_NAME":{
                state={...state, name: action.payload}
                break
        }
        case "SELECT_CAR_TABLE":{
                state={...state, car: action.payload }
        }
        
    }
    
    return state;
};