import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import UserToolbar from './usertoolbar';
import IconUser from 'material-ui/svg-icons/action/account-circle';
import ProcressBar from 'react-progress-bar-plus';
import { connect } from "react-redux"
import {selectUserFromTable} from "../actions/userActions"


const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};

class UserTable extends React.Component {

    constructor(props) {
        super(props);

        var myself = this;

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '500px',
        };

        // daten vom server holen... Mittelfristig URL´s zentral im Redux-Store ablegen...
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://x.x.x.x/api/users");
        xhr.setRequestHeader('Authentication', 'Bearer '+localStorage.getItem('jwtToken'));
        xhr.setRequestHeader('Authorization', 'Bearer '+localStorage.getItem('jwtToken'));
        xhr.onreadystatechange = function() {
            if(xhr.readyState==4)
            {
                myself.setState({userData: JSON.parse(xhr.response)});
            }
        };
        xhr.send(null);

    }

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.car]: toggled,
        });
    };

    _onRowSelection(rows) {
        var userData = this.state.userData || [];
        
        var testdata = this.props.user;
        
        console.log("testobjekt ", testdata.user.username );
        console.log("test dec ", testdata.user);
        console.log(" testusername ", this.props.user.user.username);
    console.log(" test ", this.props.user);
    console.log(" testusername ", this.props.user.username);
    console.log(" testuserrole ", this.props.user.role);
    console.log(" testusername ", this.props.user.lastname);
    console.log(" testusername ", this.props.user.first);
    for (let i = 0; i < rows.length; i++) {
        this.props.dispatch(selectUserFromTable(this.state.userData[rows[i]]));
        console.log(this.state.userData[rows[i]]);
        
        
    }
}


    handleChange = (event) => {
        this.setState({height: event.target.value});
    };

    render() {
        var userData = this.state.userData || [];
        return (
            <div>
                <UserToolbar/>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                    onRowSelection={(rows) => this._onRowSelection(rows)}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn colSpan="6" style={{textAlign: 'center'}}>
                                <IconUser/>
                                <div>Benutzer Verwaltung</div>
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="Benutzer ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Zeigt Benutzernamen an">Benutzername</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Vorname">Vorname</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Nachname">Nachname</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Zeigt die Rolle des Benutzers an">Rolle</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Zeigt die E-Mail-Adresse des Benutzers an">E-Mail</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {userData.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.username}</TableRowColumn>
                                <TableRowColumn>{row.firstname}</TableRowColumn>
                                <TableRowColumn>{row.lastname}</TableRowColumn>
                                <TableRowColumn>{row.role}</TableRowColumn>
                                <TableRowColumn>{row.email}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        user: state.user
    };
}
export default connect(mapStateToProps)(UserTable);