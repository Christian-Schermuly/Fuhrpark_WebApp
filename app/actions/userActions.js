/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * provides userReducer with information from the selected tablerow
 * used for edit
 */

export function selectUserFromTable(user){
    return{
        type: 'SELECT_USER_TABLE',
        payload: user,
    }
}