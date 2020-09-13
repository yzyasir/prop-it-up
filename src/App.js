import React, { Component } from 'react';
import './App.css';
import PersonInfo from './components/PersonInfo'

// This is a functional component, this is jsx (javascript xml) not html
// JSX is not JavaScript
// This is the default stuff in the app
class App extends Component {
  // this is a child class that we are inheriting, an extention 
  constructor(props){ //constructor method is needed if we apply state, also passing in props
    super(props);
    //we can make the state = anything, so make it an object and input data
    this.state = { 
      People: []
    }
  }

  render(){
    //render method is needed 
    return(
      <div>
        <PersonInfo
          name="Doe, Jane"
          age={45}
          hairColor="Black"
        />
        <PersonInfo
          name="Smith, John"
          age={88}
          hairColor="Brown"
        />
        <PersonInfo
          name="Fillmore, Millard"
          age={45}
          hairColor="Black"
        />
        <PersonInfo
          name="Smith, Maria"
          age={62}
          hairColor="Brown"
        />
        {/* Benefit of this is now just in the personinfo.jsx we can just use one div to add the css, or spacing */}
      </div>
    );
  }
}
// Important to return only one element, so basically wrap it and send it over
export default App;
