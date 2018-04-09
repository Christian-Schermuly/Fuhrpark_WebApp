
import axios from 'axios';


/*
 * auth-token
 */

export default function setAuthToken(token){
    if(token)
    {
        var bearer = "Bearer " + token;
        axios.defaults.headers.common['Authorization'] = bearer;
    }else {
        delete axios.defaults.headers.common['Authorization']
    }
}
