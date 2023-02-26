import './App.css';
import React, {Component, Fragment} from 'react';

class App extends React.Component {
  
  render(){
   
    const name= 'John Doe';
    const loading = false;
    const showName = false;
    return (
      <div className="App">
        <h1>App Heading</h1>
        {loading? <h3>Loading.......</h3> : <h1>Hello from react {showName ? name : null}</h1> }
        
        
      </div>
       );
  }
}

export default App;
