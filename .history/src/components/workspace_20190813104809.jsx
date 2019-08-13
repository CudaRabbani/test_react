import React, {Component} from 'react';
import Source from "./source";
import CustomModal from "../common/customModal";


class WorkSpace extends Component {
    state = {
        userModal: false,
        houseModal: false,
        bedroomModal: false,
        livingroomModal:false,
        bathroomModal:false,
        kitchenModal:false,
        cookZoneModal: false,
        sinkZoneModal:false,
        doorZoneModal:false,
        tempSensorModal: false,
        pressureSensorMadal:false,
        lightSensorModal:false
    };
    userForm = [
        {id: 'name', label: 'Name', type: 'text'},
        {id: 'age', label: 'Age', type: 'text'}
    ];
    houseForm = [
        {id: 'house_no', label: 'House No', type: 'text'},
        {id: 'street_no', label: 'Street No', type: 'text'}
    ];
    bedroomForm = [
        {id: 'bedroom_name', label: 'Room Name', type: 'text'},
        {id: 'debroom_type', label: 'Room Type', type: 'text'}
    ];
    livingroomForm = [
        {id: 'livingroom_name', label: 'Room Name', type: 'text'},
        {id: 'livingroom_type', label: 'Room Type', type: 'text'}
    ];
    bathroomForm = [
        {id: 'batchroom_name', label: 'Room Name', type: 'text'},
        {id: 'bathroom_type', label: 'Room Type', type: 'text'}
    ];
    kitchenForm = [
        {id: 'kitchen_room', label: 'Room Name', type: 'text'},
        {id: 'kitchen_type', label: 'Room Type', type: 'text'}
    ];
    cookZoneForm = [
        {id: 'cook_name', label: 'zone Name', type: 'text'},
        {id: 'cook_type', label: 'zone Type', type: 'text'}
    ];
    sinkZoneForm = [
        {id: 'sink_name', label: 'Room Name', type: 'text'},
        {id: 'sink_type', label: 'zone Type', type: 'text'}
    ];
    doorZoneForm = [
        {id: 'door_name', label: 'Room Name', type: 'text'},
        {id: 'foor_type', label: 'zone Type', type: 'text'}
    ];
    tempSensorForm = [
        {id: 'temp_name', label: 'sensor Name', type: 'text'},
        {id: 'temp_type', label: 'sensor Type', type: 'text'}
    ];
    pressureSensorForm = [
        {id: 'pressure_name', label: 'sensor Name', type: 'text'},
        {id: 'pressure_type', label: 'sensor Type', type: 'text'}
    ];
    lightSensorForm = [
        {id: 'light_name', label: 'sensor Name', type: 'text'},
        {id: 'light_type', label: 'sensor Type', type: 'text'}
    ];


    onModal = (sourceId) => {
        console.log('Showing modal', sourceId);
        const currentModals = {
            userModal: false,
            houseModal: false,
            bedroomModal: false,
            livingroomModal: false,
            bathroomModal: false,
            kitchenModal: false,
            cookZoneModal: false,
            sinkZoneModal: false,
            doorZoneModal: false,
            tempSensorModal: false,
            pressureSensorModal: false,
            lightSensorModal: false
        };
        this.setState({currentModals});
        switch (sensorId) {
            case 1:
                const user = this.state.userModal;
                this.setState({userModal: !user});
                break;
            case 2:
                const house = this.state.houseModal;
                this.setState({houseModal: !house});
                break;
            case 3:
                const bedroom = this.state.bedroomModal;
                this.setState({bedroomModal: !bedroom});
                break;

            case 4:
                const livingroom = this.state.livingroomModal;
                this.setState({livingroomModal: !livingroom});
                break;
            case 5:
                const bathroom = this.state.bathroomModal;
                this.setState({bathroomModal: !bathroom});
                break;
            case 6:
                const kitchen = this.state.kitchenModal;
                this.setState({kitchenModal: !kitchen});
                break;
            case 7:
                const cookZone = this.state.cookZoneModal;
                this.setState({cookZoneModal: !cookZone});
                break;
            case 8:
                const sinkZone = this.state.sinkZoneModal;
                this.setState({sinkZoneModal: !sinkZone});
                break;
            case 9:
                const doorZone = this.state.doorZoneModal;
                this.setState({doorZoneModal: !doorZone});
                break;
            case 10:
                const tempSensor = this.state.tempSensorModal;
                this.setState({tempSensorModal: !tempSensor});
                break;
            case 11:
                const pressureSensor = this.state.pressureSensorModal;
                this.setState({pressureSensorModal: !pressureSensor});
                break;
            case 12:
                const lightSensor = this.state.lightSensorModal;
                this.setState({lightSesnorModal: !lightSensor});
                break;
            default:
                break;
        }
    };
    onModalClose = () => {
        this.setState(
            {
                userModal: false, houseModal: false,
                bedroomModal: false, livingroomModal: false,
                bathroomModal: false, kitchenModal: false, cookZoneModal: false,
                sinkZoneModal: false,
                doorZoneModal: false,
                tempSensorModal: false,
                pressureSensorModal: false,
                lightSensorModal: false
            });
    };
    render() {
        const {sensors, onDragOver, onDrop, onDragStart, onDelete} = this.props;
        return (
            <div
                className="droppable"
                onDragOver={(e) =>onDragOver(e)}
                onDrop={(e) => onDrop(e, "sensorId")}>
                {sensors.map(sensor =>
                    <Source
                        key={sensor.id}
                        label={sensor.name}
                        onDragStart = {onDragStart}
                        sensorId={sensor.id}
                        onDelete = {onDelete}
                        onModal={this.onModal}
                    />
                )}
                {this.state.userModal
                    ?<CustomModal
                        show={this.state.userModal}
                        onHide={this.onModalClose}
                        formData={this.userForm}
                        formTitle='User Info'
                        formId='user'
                    />
                    : null}
                {this.state.houseModal
                    ?<CustomModal
                        show={this.state.houseModal}
                        onHide={this.onModalClose}
                        formData={this.houseForm}
                        formTitle='House Info'
                        formId='house'
                    />
                    : null}
                {this.state.kitchenModal
                    ?<CustomModal
                        show={this.state.kitchenModal}
                        onHide={this.onModalClose}
                        formData={this.kitchenForm}
                        formTitle='Kitchen Info'
                        formId='kitechen name'
                    />
                    : null}
                {this.state.sinkZoneModal
                    ?<CustomModal
                        show={this.state.sinkZoneModal}
                        onHide={this.onModalClose}
                        formData={this.sinkZoneForm}
                        formTitle='Sink Zone Info'
                        formId='sink name'
                    />
                    : null}
                {this.state.tempSensorModal
                    ?<CustomModal
                        show={this.state.tempSensorModal}
                        onHide={this.onModalClose}
                        formData={this.tempSensorForm}
                        formTitle='Sensor Info'
                        formId='Sensor Type'
                    />
                    : null}
            </div>
        );
    }
}


export default WorkSpace;