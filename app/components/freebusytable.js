import React from 'react';
import {
    Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
}
    from 'material-ui/Table';

const tableData = [
    {
        car: 'Car1',
        status: 'Free',
    },
    {
        name: 'Car2',
        status: 'Reserved',
    },
    {
        name: 'Car3',
        status: 'Free',
    },
    {
        name: 'Car4',
        status: 'Reserved',
    },
    {
        name: 'Car5',
        status: 'Free',
    },
    {
        name: 'Car6',
        status: 'Free',
    },
];

export default class TableExampleComplex extends React.Component {
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
        
                // daten vom server holen
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://x.x.x.x/api/cars");
        xhr.setRequestHeader('Authentication', 'Bearer '+localStorage.getItem('jwtToken'));
        xhr.setRequestHeader('Authorization', 'Bearer '+localStorage.getItem('jwtToken'));
        xhr.onreadystatechange = function() {
            if(xhr.readyState==4)
            {
                self.setState({carData: JSON.parse(xhr.response)});
            }
        };
        xhr.send(null);
    }


        render() {
            var carData = this.state.carData || [];
        
        return (
            <div>
                <div>
                    <a>Wählen Sie ein Fahrzeug aus der Liste, welches Sie buchen möchten.</a>
                </div>
                <Table>
                    <TableHeader                    >
                        <TableRow>
                            <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                                Freie Fahzeuge
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={true}
                        deselectOnClickaway={true}
                    >
                        {carData.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.vendor}</TableRowColumn>
                                <TableRowColumn>{row.model}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={true}
                    >
                        <TableRow>
                            <TableRowColumn>ID</TableRowColumn>
                            <TableRowColumn>Name</TableRowColumn>
                            <TableRowColumn>Status</TableRowColumn>
                        </TableRow>
                        <TableRow>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        );
    }
}