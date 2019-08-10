import React from 'react';

const TextField = (props) => {
    //console.log (props);
    const {id, name, type, label, value, onChange} = props;
    return (
        <div className="form-group">
            <label id="name">{label}</label>
            <input id={id}
                   onChange={(e) =>onChange(e)}
                   name={name}
                   value={value}
                   type={type}
                   className="form-control" />
        </div>
    );
};

export default TextField;

