


import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Center from 'react-center';
import RaisedButton from 'material-ui/RaisedButton';
import signupValidation from '../actions/validations/signupValidation';


const styles = {
    paper: {
        height: 550,
        width: 700,
        margin: 100,
        textAlign: 'center',
        display: 'inline-block',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        paddingTop: 20,
    },
    space:{
        margin: 20,
    }

};

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
                username: '',
                password: '',
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                passwordConfirmation:'',
            errors:{},
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    isValid(){
        const{errors, isValid} = signupValidation(this.state)

        if(!isValid)
        {
            this.setState({errors});
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.isValid())
        {
            this.props.userSignupRequest(this.state);
            console.log(this.state);
            this.context.router.push('/');
        }

    }

render(){
    return(
        <Center>
            <div>
                <MuiThemeProvider>

                    <Paper style={styles.paper} zDepth={2}>
                        <h2 style={styles.header}>Registrieren</h2>
                        <Center>
                            <div>
                                <TextField
                                    hintText="Benutzername"
                                    floatingLabelText="Benutzername"
                                    name="username"
                                    onChange={this.onChange}
                                    value={this.state.username}
                                    errorText={this.state.errors.username}
                                />
                                <TextField
                                    hintText="Ihr Passwort"
                                    floatingLabelText="Password"
                                    type="password"
                                    name="password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    errorText={this.state.errors.password}
                                />
                                <TextField
                                    hintText="Passwort Wiederholen"
                                    floatingLabelText="Password Wiederholen"
                                    type="password"
                                    name="passwordConfirmation"
                                    onChange={this.onChange}
                                    value={this.state.passwordConfirmation}
                                    errorText={this.state.errors.passwordConfirmation}

                                />
                                <TextField
                                    hintText="Ihre E-Mail Adresse"
                                    floatingLabelText="E-Mail"
                                    name="email"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    errorText={this.state.errors.email}
                                />
                            </div>
                            <div style={styles.space}>
                                <TextField
                                    hintText="Vorname"
                                    floatingLabelText="Vorname"
                                    name="firstname"
                                    onChange={this.onChange}
                                    value={this.state.firstname}
                                    errorText={this.state.errors.firstname}
                                />
                                <TextField
                                    hintText="Nachname"
                                    floatingLabelText="Nachname"
                                    name="lastname"
                                    onChange={this.onChange}
                                    value={this.state.lastname}
                                    errorText={this.state.errors.lastname}
                                />
                                <TextField
                                    hintText="Telefonnummer"
                                    floatingLabelText="Telefonnummer"
                                    name="phone"
                                    onChange={this.onChange}
                                    value={this.state.phone}
                                    errorText={this.state.errors.phone}
                                />
                            </div>
                        </Center>
                        <div style={styles.header}>
                            <RaisedButton label="Registrieren" primary={true} onTouchTap={this.onSubmit}/>
                        </div>
                        <div style={styles.header}>
                            <a href="#/login" style={styles.space}>Sie haben schon einen Account zum Login?</a>
                        </div>
                    </Paper>

                </MuiThemeProvider>
            </div>
        </Center>
    )
}
}

SignUp.contextTypes={
    router: React.PropTypes.object.isRequired
}

SignUp.propTypes={
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignUp;
