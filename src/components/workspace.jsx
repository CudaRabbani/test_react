import React, {Component} from 'react';
import Sensor from "./sensor";

class WorkSpace extends Component {
    render() {
        const {sensors, onDragOver, onDrop} = this.props;
        return (
            <div
                className="droppable"
                onDragOver={(e) =>onDragOver(e)}
                onDrop={(e) => onDrop(e, "sensorId")}>
                <h3>Sensors Added</h3>
                {sensors.map(sensor =>
                    <Sensor
                        key={sensor.id}
                        label={sensor.name}
                        onDragStart = {this.props.onDragStart}
                        sensorId={sensor.id}
                    />
                )}
            </div>
        );
    }
}


export default WorkSpace;
