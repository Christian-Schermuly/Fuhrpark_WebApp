/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * 
 * 
 * Created by Christian on 18.05.2017.
 */
 


import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Center from 'react-center';
import RaisedButton from 'material-ui/RaisedButton';
import resetValidation from './../actions/validations/resetValidation';
import {connect} from 'react-redux';
import {resetpw} from './../actions/resetPWActions';


const styles = {
    paper: {
        height: 350,
        width: 400,
        margin: 150,
        textAlign: 'center',
        display: 'inline-block',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        paddingTop: 20,
    }
};

class ResetPW extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            errors:{},
            isloading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    isValid(){
        const {errors, isValid} = resetValidation(this.state);
        if(!isValid){
            this.setState({errors});
        }
        return isValid();
        }
        
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        if(this.isValid()){
            this.setState({errors: {}, isloading: true });
            /*
             * todo:  implement... ;)
             */
            
            
        }
        
        
    }
    render(){
        const{email,errors,isloading} = this.state;
        return(
                <center>
                    <div>
                        <MuiThemeProvider>
                            <Paper style={styles.paper} zDepth={2}>
                            <h2 style={styles.header}>Passwort zurücksetzen</h2>
                            {errors.form && <div>{errors.from}</div>}
                                <TextField
                                    hintText="Email"
                                    floatingLabelText="Email"
                                    name="email"
                                    onChange={this.onChange}
                                    value={email}
                                    errorText={this.state.errors.email}
                                />
                                
                                <div style={styles.header}>
                                <RaisedButton label="Passwort zurücksetzen" primary={true} onTouchTap={this.onSubmit}/>
                                </div>
                                <div style={styles.header}>
                                <a href="#/login">zum Login</a>
                                </div>
                            </Paper>
                        
                        </MuiThemeProvider>
                    </div>
                </center>
                )
        
    }
    
}

ResetPW.contextTypes={
    router: React.PropTypes.object.isRequired
}

ResetPW.propTypes={
    resetPW: React.PropTypes.func.isRequired
}

export default ResetPW;