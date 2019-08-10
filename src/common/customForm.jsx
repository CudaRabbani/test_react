import React, {Component} from 'react';
import TextField from "./textfield";

class CustomForm extends Component {

    state = {
        user: {name: '', age: ''}
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, age} = this.state.user;
        console.log('submitted', name, age);
    };

    handleChange = (e) => {
        const user = {...this.state.user};
        user[e.currentTarget.name] = e.currentTarget.value;
        this.setState({user});
    };


    render(props) {
        const {formElement} = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {formElement.map(element => (
                        <TextField key={element.id}
                                   id={element.id}
                                   name={element.id}
                                   type={element.type}
                                   label={element.label}
                                   value={this.state[element.id]}
                                   onChange={this.handleChange}
                        />
                    ))}
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <button className="btn btn-primary btn-md">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default CustomForm;
