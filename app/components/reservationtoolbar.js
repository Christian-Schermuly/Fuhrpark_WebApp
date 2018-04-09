
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ReservationToolbar extends React.Component {
    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                </ToolbarGroup>
                <ToolbarGroup lastChild="true">
                    <RaisedButton label="Löschen" backgroundColor="#EF5350" />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
