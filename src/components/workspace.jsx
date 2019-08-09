import React, {Component} from 'react';
import Sensor from "./sensor";

class WorkSpace extends Component {
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
                    />
                )}
            </div>
        );
    }
}


export default WorkSpace;
