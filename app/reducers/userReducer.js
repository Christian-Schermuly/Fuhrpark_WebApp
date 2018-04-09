/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * user Reducer for table-selection 
 */

export default function reducer(state={
            user : {},
        
}, action) {
    switch(action.type){
        case "SELECT_USER_TABLE":{
                 state = {...state, user: action.payload}
                break;
        }
        case "USER_CHANGE_SURNAME":{
                state = {...state, surname: action.payload}
                break;
        }
        case "USER_CHANGE_MAIL":{
                break;
        }
    }
    return state;
};