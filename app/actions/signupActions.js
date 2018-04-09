
import axios from 'axios';


/*
 * User-Creation-Action
 * used by register
 */

export function userSignupRequest(userData) {
    return dispatch =>{
        return axios({
            method: 'post',
            url: 'https://10.18.2.151/api/register',
            headers: {'Content-Type': 'application/json'},
            data: userData
        })
            .then(function (response) {
                console.log(response);
            })
    }
}