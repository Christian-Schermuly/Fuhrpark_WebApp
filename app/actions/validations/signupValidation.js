
import Validator from 'validator';
import isEmpty from 'lodash.isempty'

export default function signupValidation(userData) {
    let errors={};


    if(Validator.isEmpty(userData.username))
    {
        errors.username ='Bitte überprüfen Sie ihre Angabe Username';
    }
    if(Validator.isEmpty(userData.firstname))
    {
        errors.firstname ='Bitte überprüfen Sie ihre Angabe Vorname';
    }
    if(Validator.isEmpty(userData.lastname))
    {
        errors.lastname ='Bitte überprüfen Sie ihre Angabe Nachname';
    }
    if(!Validator.isEmail(userData.email))
    {
        errors.email ='Bitte geben Sie eine gültige E-Mail Adresse an';
    }
    if(!Validator.equals(userData.password, userData.passwordConfirmation))
    {
        errors.passwordConfirmation ='Kennwörter stimmen nicht überein';
    }
    if(Validator.isEmpty(userData.password))
    {
        errors.password ='Bitte überprüfen Sie ihre Angabe Passwort';
    }
    if(Validator.isEmpty(userData.lastname))
    {
        errors.lastname ='Bitte überprüfen Sie ihre Angabe';
    }

    return{
        errors,
        isValid: isEmpty(errors),
    }
}
