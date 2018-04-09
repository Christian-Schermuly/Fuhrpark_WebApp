
import Validator from 'validator';
import isEmpty from 'lodash.isempty';

export default function validateLogin(userData) {
    let errors={};

    if(Validator.isEmpty(userData.username))
    {
        errors.username='Bitte geben Sie Ihren Benutzernamen ein'
    }
    if(Validator.isEmpty(userData.password))
    {
        errors.password='Bitte geben Sie Ihr Passwort ein'
    }

    return{
        errors,
        isValid: isEmpty(errors),
    };
    
}