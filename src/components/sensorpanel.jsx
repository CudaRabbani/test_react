import React, {Component} from 'react';
import Sensor from "./sensor";

class SensorPanel extends Component {
    render() {
        return (
            <div>
                {this.props.sensors.map(s =>
                    <Sensor
                        key={s.id}
                        label={s.name}
                        onDragStart = {this.props.onDragStart}
                        sensorId={s.id}
                    />
                )}
            </div>
        );
    }
}


export default SensorPanel;
