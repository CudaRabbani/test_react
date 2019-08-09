import React from 'react';

const Sensor = (props) => {
    const {label, sensorId, onDragStart} = props;
    return (
        <div draggable
             onDragStart={(e)=>onDragStart(e, sensorId)}
             className="draggable">
            <button className="btn btn-default btn-md btn-block">
                {label}
            </button>
            <br/>
        </div>
    );
};

export default Sensor;
