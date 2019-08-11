import React from 'react';

const Sensor = (props) => {
    const {label, sensorId, onDragStart, onDelete, onModal} = props;
    const d = onDelete ? true : false;
    if (!d) {
        return (
            <div draggable
                 onDragStart={(e)=>onDragStart(e, sensorId)}
                 className="draggable">
                <button className="btn btn-secondary btn-md btn-block">
                    {label}
                </button>
                <br/>
            </div>
        );
    }
    else {
        return (
            <div draggable
                 onDragStart={(e)=>onDragStart(e, sensorId)}
                 className="draggable">
                <i className="fa fa-window-close pull-right"
                   onClick={()=>onDelete(sensorId)}
                   aria-hidden="true"></i>
                <button
                    className="btn btn-primary btn-sm btn-block"
                    onClick={()=>onModal(sensorId)}
                >
                    {label}
                </button>
                <br/>
            </div>
        );
    }
};

export default Sensor;
