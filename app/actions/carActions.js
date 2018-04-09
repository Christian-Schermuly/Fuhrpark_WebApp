/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * Action for carReducer
 * used by cartable/cartabletoolbar
 * 
 * 
 */



/*
 * used, to save a tablerow in cartable for edit / delete function
 */
export function selectCarFromTable(car){
    return{
        type: 'SELECT_CAR_TABLE',
        payload: car,
    }
}