import React from 'react';

const Source = (props) => {
    const {label, sourceId, onDragStart, onDelete, onModal} = props;
    const d = onDelete ? true : false;
    if (!d) {
        return (
            <div draggable
                 onDragStart={(e)=>onDragStart(e, sourceId)}
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
                 onDragStart={(e)=>onDragStart(e, sourceId)}
                 className="draggable">
                <i className="fa fa-window-close pull-right"
                   onClick={()=>onDelete(sourceId)}
                   aria-hidden="true"></i>
                <button
                    className="btn btn-primary btn-sm btn-block"
                    onClick={()=>onModal(sourceId)}
                >
                    {label}
                </button>
                <br/>
            </div>
        );
    }
};

export default Source;
