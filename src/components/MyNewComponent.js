    import React, { Component } from "react";

    class PersonCard extends Component {
    constructor(props) {
    super(props);
    // State is anything that can change.
    this.state = {
        age: 45,
        age: 88
    };
    }

    handleCountAge = (event) => {
        this.setState({
            age: this.state.age + 1
        })

    };

    render() {
    return (
        <div>
        <h2>{this.props.name}</h2>
        <p>{this.state.age}</p>
        <p>{this.props.hair_color}</p>

        <button
            onClick={(event) => {
            this.handleCountAge(event);
            }}
        >
            Birthday Button for {this.props.name}
        </button>
        </div>
    );
    }
    }

    export default PersonCard;