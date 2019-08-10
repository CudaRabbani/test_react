import React, {Component} from 'react';
import Sensor from "./sensor";
import CustomModal from "../common/customModal";


class WorkSpace extends Component {
    state = {
        userForm: false,
        houseForm: false,
        bedroomForm: false,
        userModal: false
    };
    userForm = [
            {id: 'name', label: 'Name', type: 'text'},
            {id: 'age', label: 'Age', type: 'text'}
        ];

    onModal = (sensorId) => {
        console.log('Showing modal', sensorId);
        this.setState({userModal: true});
    };
    onModalClose = () => {
        this.setState({userModal: false})
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
                        /*onForm={this.onForm}*/

                    />
                )}
                {this.state.userModal
                    ?<CustomModal
                        show={this.state.userModal}
                        onHide={this.onModalClose}
                        formData={this.userForm}
                        formTitle='User Info'
                    />
                    : null}
            </div>
        );
    }
}


export default WorkSpace;

/*
{this.state.userModal
                    ?<CustomModal
                        show={this.state.userModal}
                        onHide={this.onModalClose}
                        formData={this.userForm}
                        formTitle='User Info'
                    />
                    : null
                }

 */
