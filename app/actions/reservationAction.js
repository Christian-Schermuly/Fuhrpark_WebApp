/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * Get Reservation, currently not used
 */

import axios from 'axios';

export function getAllReservations() {
    return dispatch =>{
        return axios({
            method: 'get',
            url: 'https://10.18.2.151/api/reservations',
            headers: {'Content-Type': 'application/json'},
            //data: userData
        })
            .then(function (response) {
                console.log(response);
            })
    }
}