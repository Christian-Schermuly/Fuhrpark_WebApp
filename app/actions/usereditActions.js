/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * outdated
 * 
 */


import axios from 'axios';

export function userEditRequest(userData) {
    return dispatch =>{
        return axios({
            method: 'put',
            url: 'https://10.18.2.151/api/:user',
            headers: {'Content-Type': 'application/json'},
            data: userData
        })
            .then(function (response) {
                console.log(response);
            })
    }
}