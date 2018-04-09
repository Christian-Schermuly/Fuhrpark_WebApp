/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import Validator from 'validator';
import isEmpty from 'lodash.isempty';

export default function validateBooking(bookingData) {
    let errors={};

    if(Validator.isEmpty(bookingData.username))
    {
        errors.username='Bitte geben Sie Ihren Benutzernamen ein'
    }
    if(Validator.isEmpty(bookingData.password))
    {
        errors.password='Bitte geben Sie Ihr Passwort ein'
    }
        if(Validator.isEmpty(bookingData.password))
    {
        errors.password='Bitte geben Sie Ihr Passwort ein'
    }
        if(Validator.isEmpty(bookingData.password))
    {
        errors.password='Bitte geben Sie Ihr Passwort ein'
    }

    return{
        errors,
        isValid: isEmpty(errors),
    };
    
}
