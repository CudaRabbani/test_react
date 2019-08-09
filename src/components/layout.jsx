import React, {Component} from 'react';
import Header from "./header";
import SensorPanel from "./sensorpanel";
import WorkSpace from "./workspace";

class Layout extends Component {

    state = {
        inputSensors: [
            {id: 1, name: 'Name 1', space: 'input'},
            {id: 2, name: 'Name 2', space: 'input'},
            {id: 3, name: 'Name 3', space: 'input'},
            {id: 4, name: 'Name 4', space: 'input'},
            {id: 5, name: 'Name 5', space: 'input'},
            {id: 6, name: 'Name 6', space: 'input'},
            {id: 7, name: 'Name 7', space: 'input'}
        ],
        workspaceSensors: []
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
    render() {
        return (
            <div className="container full-layout">
                <div className="row">
                    <div className="col">
                        <Header/>
                    </div>
                </div>
                <div className="m-1">
                    <div className="row">
                        <div className="col left-panel m-1">
                            Input
                            <SensorPanel
                                sensors={this.state.inputSensors}
                                onDragStart={this.onDragStart}
                            />
                        </div>
                        <div className="col workspace-panel m-1">
                            Workspace
                            <WorkSpace
                                sensors={this.state.workspaceSensors}
                                onDragStart={this.onDragStart}
                                onDragOver={this.onDragOver}
                                onDrop={this.onDrop}
                            />
                        </div>
                        <div className="col right-panel m-1">Output</div>
                    </div>
                    <div className="container footer m-1">Footer</div>
                </div>
            </div>
        );
    }
}


export default Layout;
