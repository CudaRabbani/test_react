import React, {Component} from 'react';
import SourcePanel from "./sourcepanel";
import WorkSpace from "./workspace";

class Layout extends Component {

    state = {
<<<<<<< Updated upstream
        users: [
            {id: 1, name: 'User', space: 'input'}],

        house: [
            {id: 1, name: 'House', space: 'input'}],

        rooms: [
            {id: 1, name: 'BedRoom', space: 'input'},
            {id: 2, name: 'LivingRoom', space: 'input'},
            {id: 3, name: 'BathRoom', space: 'input'},
            {id: 4, name: 'Kitchen', space: 'input'}],

        zones : [
            {id: 1, name: 'CookingZone', space: 'input'},
            {id: 2, name: 'SinkZone', space: 'input'},
            {id: 3, name: 'DoorZone', space: 'input'}],

        sensors : [
            {id: 1, name: 'Temperature', space: 'input'},
            {id: 2, name: 'Pressure', space: 'input'},
            {id: 3, name: 'Light', space: 'input'}],

    workspaceSources: [],
=======
        inputSensors: [
            {id: 1, name: 'User', space: 'input'},
            {id: 2, name: 'User', space: 'input'},
            {id: 3, name: 'User', space: 'input'},
            {id: 4, name: 'User', space: 'input'},
            {id: 5, name: 'User', space: 'input'},
            {id: 6, name: 'User', space: 'input'}
            
        ],
        workspaceSensors: []
>>>>>>> Stashed changes
    };


    onDragStart = (e, source) => {
        e.dataTransfer.setData("sourceId", source);
    };
    onDragOver = (e) => {
        e.preventDefault();
    };
    onDrop = (e, source) => {
        const sourceID = e.dataTransfer.getData('sourceId');
        let currentWpSources = this.state.workspaceSources;
        let wpSource = this.state.users.filter (inSource => inSource.id === parseInt(sourceID));
        wpSource[0].space = 'workspace';
        currentWpSources = [...currentWpSources,...wpSource];
        this.setState({workspaceSources: currentWpSources});
    };
    onDelete = (sourceId) => {
        let wpSources = this.state.workspaceSources.filter(s => parseInt(s.id) !== sourceId);
        this.setState({workspaceSources: wpSources});
    };
    render() {
        return (
            <div>
                <div className="row">
<<<<<<< Updated upstream
                    <div className="col-sm-2 left-panel m-1" >
                        <h4>Input Panel</h4>
                        <SourcePanel
                            sources={this.state.users}
                            onDragStart={this.onDragStart}  
=======
                    <div className="col left-panel m-1">
                        Input
                        <SensorPanel
                            sensors={this.state.inputSensors}
                            onDragStart={this.onDragStart}
>>>>>>> Stashed changes
                        />
                       
                        <SourcePanel
                            sources={this.state.house}
                            onDragStart={this.onDragStart}  
                        />
                        <div> <h5> Room List</h5></div>
                        <SourcePanel
                        
                            sources={this.state.rooms}
                            onDragStart={this.onDragStart} />

                        <div> <h5> Zones : </h5></div>

                        <SourcePanel
                        
                        sources={this.state.zones}
                        onDragStart={this.onDragStart}
                        
                    />
                    <div><h5>Sensor List</h5></div>
                     <SourcePanel
                            sources={this.state.TemperatureSensor}
                            onDragStart={this.onDragStart}  
                        />

                    </div>
<<<<<<< Updated upstream
                    <div className="col-sm-4 workspace-panel m-1">
                        Workspace
=======
                    <div className="col workspace-panel m-1">
                        Drag and Drop Sensors In This Area
>>>>>>> Stashed changes
                        <WorkSpace
                            sources={this.state.workspaceSources}
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
