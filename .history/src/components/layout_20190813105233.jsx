import React, {Component} from 'react';
import SourcePanel from "./sourcepanel";
import WorkSpace from "./workspace";


class Layout extends Component {

    state = {
        inputSensors: [
            {id: 1, name: 'User',source: 'user', space: 'input'},
            {id: 2, name: 'House', source: 'house', space: 'input'},
            {id: 3, name: 'BedRoom',source: 'room' ,space: 'input'},
            {id: 4, name: 'LivingRoom',source: 'room', space: 'input'},
            {id: 5, name: 'BathRoom', source: 'room', space: 'input'},
            {id: 6, name: 'Kitchen', source: 'room', space: 'input'},
            {id: 7, name: 'CookingZone',source: 'zone', space: 'input'},
            {id: 8, name: 'SinkZone',source: 'zone' ,space: 'input'},
            {id: 9, name: 'DoorZone', source: 'zone',space: 'input'},
            {id: 10, name: 'Temperature',source: 'sensor' ,space: 'input'},
            {id: 11, name: 'Pressure', source: 'sensor',space: 'input'},
            {id: 12, name: 'Light', source: 'sensor',space: 'input'}
        ],
        workspaceSensors: [],
    };


    onDragStart = (e, source) => {
        e.dataTransfer.setData("sourceId", source);
    };
    onDragOver = (e) => {
        e.preventDefault();
    };
    onDrop = (e, source) => {
        const sourceID = e.dataTransfer.getData('sourceId');
        let currentWpSensors = this.state.workspaceSensors;
        let wpSensor = this.state.inputSensors.filter (inSensor => inSensor.id === parseInt(sensorID));
        wpSensor[0].space = 'workspace';
        currentWpSensors = [...currentWpSensors,...wpSensor];
        this.setState({workspaceSensors: currentWpSensors});
    };
    onDelete = (sensorId) => {
        let wpSensors = this.state.workspaceSensors.filter(s => parseInt(s.id) !== sensorId);
        this.setState({workspaceSensors: wpSensors});
    };

    addModalClose = () => {
        this.setState({addModalShow: false});
    };

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-sm-2 left-panel m-1">
                        Input
                        <SourcePanel
                            sources={this.state.inputSensors}
                            onDragStart={this.onDragStart}
                        />
                    </div>
                    <div className="col-sm-4 workspace-panel m-1">
                        Workspace
                        <WorkSpace
                            sources={this.state.workspaceSensors}
                            onDragStart={this.onDragStart}
                            onDragOver={this.onDragOver}
                            onDrop={this.onDrop}
                            onDelete={this.onDelete}
                        />
                    </div>
                    <div className="col right-panel m-1">Output</div>
                </div>
                <div className="container footer m-1">Footer</div>
            </div>
        );
    }
}


export default Layout;