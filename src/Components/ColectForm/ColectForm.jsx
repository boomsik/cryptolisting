import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { React, Component } from "react";
class ColectForm extends Component {
    state = {
        name: "",
        coin: "",
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addListing(this.state);
    };

    handleChange = ({ target: { value, name } }) => {
        this.setState({ [name]: value });
    };

    render() {
        return (
            <Form
                style={{
                    width: "700px",
                    marginLeft: "450px",
                }}
                onSubmit={this.handleSubmit}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Project name</Form.Label>
                    <Form.Control
                        type="string"
                        placeholder="Project name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Token name</Form.Label>
                    <Form.Control
                        name="coin"
                        type="text"
                        placeholder="Token name"
                        value={this.state.coin}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default ColectForm;
