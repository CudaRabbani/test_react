import React, {Component} from 'react';
import TextField from "./textfield";

class CustomForm extends Component {

    constructor(props) {
        super(props);
        let {formId} = props;
        this.state = {
            formId: []
        }
    }

    componentDidMount() {
        this.setState({formId: this.props.formElement});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let elements = this.props.formElement.map(elem => elem.id);
        elements.map(element=>console.log(this.state.formId[element]));
    };

    handleChange = (e) => {
        const formId = {...this.state.formId};
        formId[e.currentTarget.name] = e.currentTarget.value;
        this.setState({formId});
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
