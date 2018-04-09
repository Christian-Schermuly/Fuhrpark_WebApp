
/*
 * outdated
 */
import {SET_CURRENT_USER} from '../actions/types'
import { LOGOUT_SUCCESS} from '../actions/types'
import {LOG_OUT_USER} from '../actions/types'
import isEmpty from 'lodash.isempty'
import {browserHistory} from 'react-router';


const initialState ={
    isAuthenticated: false,
    user:{}
};

export default (state = initialState, action = {})=>{
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                isAuthenticated: !isEmpty(action.user),
                user: action.user,
            }
        case LOG_OUT_USER:
            return{
                isAuthenticated: false,
                user:{}
            }
        case LOGOUT_SUCCESS:
            return{
                isAuthenticated: false,
                user:{}
                
            }
        default: return state;
    }
        
}