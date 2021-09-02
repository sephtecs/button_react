    import React, { Component } from "react";

    class PersonCard extends Component {
    
        constructor(props) {
            super(props);
            // State is anything that can change.
    
            this.state = {
                age: this.props.age,
            };
    }

    handleCountAge = () => {
        this.setState({ age: this.state.age + 1});
    };

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>Age: {this.state.age}</p>
                <p>{this.props.hair_color}</p>

                <button onClick= {this.handleCountAge}>
                    Birthday Button for {this.props.name}
                </button>
            </div>
        );
    }
}

    export default PersonCard;