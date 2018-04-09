/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import Validator from 'validator';
import isEmpty from 'lodash.isempty'

export default function createCarValidation(carData) {
    let errors={};


    if(Validator.isEmpty(carData.vendor))
    {
        errors.vendor ='Bitte überprüfen Sie ihre Angabe Hersteller';
    }
    if(Validator.isEmpty(carData.model))
    {
        errors.model ='Bitte überprüfen Sie ihre Angabe Modell';
    }
    if(Validator.isEmpty(carData.mileage))
    {
        errors.lastname ='Bitte überprüfen Sie ihre Angabe Kilometerstand';
    }
    if(Validator.isEmpty(carData.licenseNumber))
    {
        errors.licenseNumber ='Bitte überprüfen Sie ihre Angabe Kennzeichen';
    }
    if(Validator.isEmpty(carData.chargedkWh))
    {
        errors.chargedkWh ='Bitte überprüfen Sie ihre Angabe Passwort';
    }



    return{
        errors,
        isValid: isEmpty(errors),
    }
}