import React, {Component} from 'react';
import SensorPanel from "./sensorpanel";
import WorkSpace from "./workspace";


class Layout extends Component {

    state = {
        inputSensors: [
            {id: 1, name: 'User', space: 'input'},
            {id: 2, name: 'House', space: 'input'},
            {id: 3, name: 'Bedroom', space: 'input'},
            {id: 4, name: 'Living Room', space: 'input'},
            {id: 5, name: 'Kitchen', space: 'input'},
            {id: 6, name: 'Bathroom', space: 'input'},
            {id: 7, name: 'Zone', space: 'input'}
        ],
        workspaceSensors: [],
    };


    onDragStart = (e, sensor) => {
        e.dataTransfer.setData("sensorId", sensor);
    };
    onDragOver = (e) => {
        e.preventDefault();
    };
    onDrop = (e, sensor) => {
        const sensorID = e.dataTransfer.getData('sensorId');
        let currentWpSensors = this.state.workspaceSensors;
        let wpSensor = this.state.inputSensors.filter (inSensor => inSensor.id == sensorID);
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
                        <SensorPanel
                            sensors={this.state.inputSensors}
                            onDragStart={this.onDragStart}
                        />
                    </div>
                    <div className="col-sm-4 workspace-panel m-1">
                        Drag and Drop Sensors In This Area
                        <WorkSpace
                            sensors={this.state.workspaceSensors}
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
