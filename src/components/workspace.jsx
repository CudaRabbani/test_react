import React, {Component} from 'react';
import Sensor from "./sensor";
import CustomModal from "../common/customModal";


class WorkSpace extends Component {
    state = {
        userModal: false,
        houseModal: false,
        bedroomModal: false
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
        {id: 'room_no', label: 'Room Type', type: 'text'},
        {id: 'room_no', label: 'Room Type', type: 'text'}
    ];


    onModal = (sensorId) => {
        console.log('Showing modal', sensorId);
        const currentModals = {
            userModal: false,
            houseModal: false,
            bedroomModal: false,
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
            default:
                break;
        }
    };
    onModalClose = () => {
        this.setState({userModal: false, houseModal: false, bedroomModal: false});
    };
    render() {
        const {sensors, onDragOver, onDrop, onDragStart, onDelete} = this.props;
        return (
            <div
                className="droppable"
                onDragOver={(e) =>onDragOver(e)}
                onDrop={(e) => onDrop(e, "sensorId")}>
                {sensors.map(sensor =>
                    <Sensor
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
                    {this.state.bedroomModal
                    ?<CustomModal
                        show={this.state.bedroomModal}
                        onHide={this.onModalClose}
                        formData={this.bedroomForm}
                        formTitle='BedRoom Info'
                        formId='BedRoom Name'
                    />
                    : null}
            </div>
        );
    }
}


export default WorkSpace;
