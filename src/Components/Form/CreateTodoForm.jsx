import { React, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateTodoForm.css";

class CreateTodoForm extends Component {
    state = {
        title: "",
        description: "",
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
    };

    handleChange = ({ target: { value, name } }) => {
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="boxex">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >
                            Title
                        </label>
                        <input
                            name="title"
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            Description
                        </label>
                        <input
                            name="description"
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default CreateTodoForm;
