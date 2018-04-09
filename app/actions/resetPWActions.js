/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */

/*
 * todo
 * reset PW Action, currently not used / no REST-API
 * 
 */

import axios from 'axios';
import setAuthToken from './setAuthToken';
import jwt from 'jsonwebtoken';
import {SET_CURRENT_USER} from './types'

export function resetpw(userData) {
    return dispatch =>{
        return axios({
            method: 'post',
            url: 'https://10.18.2.151/api/resetpw',
            headers: {'Content-Type': 'application/json'},
            data: userData
        }).then(function (response) {
            /*
             * todo
             */
        });
    };
}