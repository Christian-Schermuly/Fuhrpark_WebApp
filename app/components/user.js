
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Center from 'react-center';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'


const styles = {
    space: {
        padding: 50,
    },
    header: {
        paddingTop: 50,
    },
    textField: {
        padding: 50,
        float: "left",
    },
    textFieldButtom:{
        clear: "both",
        padding: 50,
    },
    button:{
        padding: 50,
        float: "left",
    },

};

class UserDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _id : this.props.current.user._id,
            username: this.props.current.user.username,
            password: '',
            firstname: this.props.current.user.firstname,
            lastname: this.props.current.user.lastname,
            email: this.props.current.user.email,
            phone: this.props.current.user.phone,
            passwordConfirmation: '',
            userrole: this.props.current.user.role,
            errors:{}
        }
            this.onChange = this.onChange.bind(this);
      
    };

    
        onChange(e){
        this.setState({[e.target.name]: e.target.value});
    };
    
    handleChange = (event, index, value) => this.setState({value});

    render() {

        return (
            <MuiThemeProvider>
                <div>
                <div>
                    <div style={styles.textField}>
                    <div>
                        <a>Benutzerdetails</a>
                    </div>
                    <div>
                        <TextField
                        hintText="Benutzername"
                        floatingLabelText="Benutzername"
                        name="username"
                        onChange={this.onChange}
                        value={this.state.username}
                        errorText={this.state.errors.username}
                        />
                    </div>
                    <div>
                        <TextField
                            hintText="Vorname"
                        floatingLabelText="Vorname"
                        name="firstname"
                        onChange={this.onChange}
                        value={this.state.username}
                        errorText={this.state.errors.firstname}
                        />
                    </div>
                    <div>
                        <TextField
                            hintText="Nachname"
                        floatingLabelText="Nachname"
                        name="lastname"
                        onChange={this.onChange}
                        value={this.state.lastname}
                        errorText={this.state.errors.lastname}
                        />
                    </div>
                    </div>
                    <div style={styles.textField}>
                        <div>
                            <div>
                                <a>Kontaktdaten</a>
                            </div>
                            <div>
                                <TextField
                                    hintText="E-Mail Adresse"
                                    hintText="Ihre E-Mail Adresse"
                        floatingLabelText="E-Mail"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                        errorText={this.state.errors.email}
                                />
                            </div>
                            <div>
                                <TextField
                                    hintText="Telefonnummer"
                        floatingLabelText="Telefonnummer"
                        name="phone"
                        onChange={this.onChange}
                        value={this.state.phone}
                        errorText={this.state.errors.phone}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                    <div style={styles.textFieldButtom}>
                    <Center>
                    <div style={styles.button}>
                    <RaisedButton label="Bearbeiten" primary={true} />
                        </div>
                    <div style={styles.button}>
                    <RaisedButton label="Speichern" primary={true} />
                    </div>
                    </Center>
                    </div>
                </div>
            </MuiThemeProvider>
    );
    }
    }
    
    /*
     * provides the current user information from the store as 
     * current
     */

function mapStateToProps(state){
       return{
        current: state.current
    };
}

export default connect(mapStateToProps)(UserDetails);