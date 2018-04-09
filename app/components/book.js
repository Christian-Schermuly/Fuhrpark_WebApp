
import React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DateTimePicker from './datetimepicker';
import FreeBusyTable from './freebusytable';
import bookingValidation from '../actions/validations/bookingValidation';
import axios from 'axios';
import { connect } from "react-redux"
import { bookingSetUser, bookingSetStart } from "../actions/bookingActions"

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */


class LinearStepperReservation extends React.Component {

    state = {
        finished: false,
        stepIndex: 0,
        startDate:'',
        endDate:'',
        user:'',
        car:''
        
    };
    /*
     * bookdata = datagathering for booking
     * gets filled via child-elements / store
     * 
     * 
     */
    
    bookdata = {
        startDate: null,
        endDate: null,
        user: null,
        car: "59997a964355130316e259b259997a964355130316e259b2"
    }
    
    onSubmit(e){
            //console.log("booking-data: ", this.props.booking);
            axios({
                method: 'post',
                url: 'https://10.18.2.151/api/reservations',
                data: this.bookdata,
                
                
            })
            console.log(this.state);
            
    }

    handleNext = () => {
            
            console.log(this.bookdata);
            
        const {stepIndex} = this.state;
        this.bookdata.startDate = this.props.booking.startTime;
        this.bookdata.endDate = this.props.booking.endTime;
        this.bookdata.user = this.props.current.user.id;
        //this.state.stepIndex
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
        
            
        
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };
    

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <DateTimePicker/>;
            case 1:
                return <FreeBusyTable/>;
            case 2:
                return <div>
                    <a>Bitte Bestätigen Sie Ihre Fahrzeugreservierung!</a>
                    
                    <a> Um betsehende Buchungen zu bearbeiten gehe zu "Meine Reservierungen"</a>
                </div>;
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    render() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
        const styles={
            picker:{
                paddingTop: 50,
            }
        };

        return (
        <MuiThemeProvider>
            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                <Stepper activeStep={stepIndex} style={styles.picker}>
                    <Step>
                        <StepLabel>Buchungszeitraum wählen</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Verfügbare Fahrzeuge wählen</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Fahrzeug buchen</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished ? (
                        <p>
                            <a
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({stepIndex: 0, finished: false});
                                }}
                            >
                                Zurück
                            </a> um eine weitere Buchung durchzuführen.
                        </p>
                    ) : (
                        <div>
                            <p>{this.getStepContent(stepIndex)}</p>
                            <div style={{marginTop: 12}}>
                                <FlatButton
                                    label="Zurück"
                                    disabled={stepIndex === 0}
                                    onTouchTap={this.handlePrev}
                                    style={{marginRight: 12}}
                                />
                              
                                <RaisedButton
                                    label={stepIndex === 2 ? 'Reservieren' : 'Weiter'}
                                    primary={true}
                                    onTouchTap={this.handleNext}
                                />
                                <RaisedButton label="Hinzufügen" onTouchTap={this.onSubmit}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state){
       return{
        booking: state.booking,
        current: state.current,
        car: state.car
    };
}

export default connect(mapStateToProps)(LinearStepperReservation);
