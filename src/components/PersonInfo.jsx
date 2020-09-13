import React, {Component} from 'react';
// Class component must be uppercamelcase

// render method needs a return method if you are not using a constructor
class PersonInfo extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            addAge : age //here we are setting age to the state of addAge
        }
    }

    plusOneYear(){
        this.setState(prevState =>{
            return {addAge += 1}
            // THIS IS WRONG
        })
    }

    render(){
        const {name, age, hairColor} = this.props;
        // putting them into the parameters and then using them like a variable is called destructuring
        return (
            <div>
                {/* the below "tags" are children of components */}
                <h2>{name}</h2>
                {/* using curly here because its a variable  */}
                <p>Hair Color: {hairColor}</p>
                <p>Age: {this.state.addAge}</p>
                <button onClick={this.plusOneYear}>Birthday Button</button>
            </div>
        )
    }
}

export default PersonInfo