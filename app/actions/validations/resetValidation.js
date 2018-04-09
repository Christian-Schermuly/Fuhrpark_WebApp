/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */
import Validator from 'validator';
import isEmpty from 'lodash.isempty'

export default function resetValidation(userData) {
    let errors={};

    if(Validator.isEmpty(userData.email))
    {
        errors.email='Bitte geben Sie eine gültige Email-Addresse an!'
    }

    return{
        errors,
        isValid: isEmpty(errors),
    };
    
}

