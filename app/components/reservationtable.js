
import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import ReservationToolbar from './reservationtoolbar';
import IconUser from 'material-ui/svg-icons/action/account-circle';


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
/* Static Test-Data for Testing Purposes... Todo: Get rid of it, if there´s no anymore!
const reservationData =[
    {
        _id: "1",
        __v: 0,
        user: "user1",
        car: "F-FH-000",
        startDate: "<Date>",
        endDate: "<Date>"
    },
    {
        _id: "2",
        __v: 0,
        user: "user3",
    car: "F-FH-123",
    startDate: "",
    endDate: "",
},
{
    _id: "3",
        __v: 0,
    user: "user2",
    car: "F-FH-345",
    startDate: "<Date>",
    endDate: "<Date>"
},
{
    _id: "4",
        __v: 0,
    user: "user4",
    car: "F-FH-789",
    startDate: "<Date>",
    endDate: "<Date>"
},
];
*/
export default class UserTable extends React.Component {

    constructor(props) {
        super(props);
        var self = this;
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
        
                        // daten vom server holen, anstatt Static...
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://x.x.x.x/api/reservations");
        xhr.setRequestHeader('Authentication', 'Bearer '+localStorage.getItem('jwtToken'));
        xhr.setRequestHeader('Authorization', 'Bearer '+localStorage.getItem('jwtToken'));
        xhr.onreadystatechange = function() {
            if(xhr.readyState==4)
            {
                self.setState({reservationData: JSON.parse(xhr.response)});
            }
        };
        xhr.send(null);
    }

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.car]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };

    render() {
        var reservationData = this.state.reservationData || [];
        
        return (
            <div>
                <ReservationToolbar/>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn colSpan="5" style={{textAlign: 'center'}}>
                                <IconUser/>
                                <div>Meine Reservierungen</div>
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="Benuzter ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Name des Benutzers">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Zeigt das reservierte Auto an">Auto</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Von Datum reserviert">Von</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Bis Datum reserviert">Bis</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {reservationData.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.user.lastname}, {row.user.firstname}</TableRowColumn>
                                <TableRowColumn>{row.car.vendor} {row.car.model}</TableRowColumn>
                                <TableRowColumn>{row.startDate}</TableRowColumn>
                                <TableRowColumn>{row.endDate}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}
