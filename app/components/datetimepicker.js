
import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Center from 'react-center';
import DateTimeField from "react-bootstrap-datetimepicker";
import { bookingSetStartTime, bookingSetEndTime, bookingSetStartDate, bookingSetEndDate } from "../actions/bookingActions"
import { connect } from "react-redux"

const styles = {
    input: {
        padding: 50,
    }

};

class DateTimePicker extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            blub: 'waaaaagh',
            test: '',
            vendor: ''
        };
       // this.onChange = this.onChange.bind(this);
       // this.onSubmit =this.onSubmit.bind(this);
     }
    handleToggle = () => this.setState({openAdd: !this.state.openAdd});
    
    getTime(x, event){
       // this.props.dispatch(bookingSetUser(1, event));
    }
    /*
     * 
     */

    render() {
        var title = "bla";
        return (<div>
                <a>Wählen Sie Ihr Abfahrts- und Rückkehr-Datum aus um ein Fahrzueg zu reservieren</a>
                <Center>
                    <div style={styles.input}>
                        <a>Abfahrt</a>
                        <DatePicker hintText="Von Datum" 
                        mode="landscape" 
                        onChange={(x, event) => this.props.dispatch(bookingSetStartDate(event))}/>
                        <TimePicker
                            format="24hr"
                            hintText="Von Uhrzeit"
                            onChange={(x, event) => this.props.dispatch(bookingSetStartTime(event))}
                        />
                        
                        
                    </div>
                    <div style={styles.input}>
                        <a>Rückkehr</a>
                        <DatePicker hintText="Bis Datum" mode="landscape" 
                        onChange={(x, event) => this.props.dispatch(bookingSetEndDate(event))}/>
                        <TimePicker
                            format="24hr"
                            hintText="Bis Uhrzeit"
                            onChange={(x, event) => this.props.dispatch(bookingSetEndTime(event))}
                        />
                    </div>
                </Center>
            </div>
        );
    }


}
function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(DateTimePicker);