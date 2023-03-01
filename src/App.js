import './App.css';
import Navbar from './components/layout/Navbar'
import React, {Component, Fragment} from 'react';
import Users from './components/users/Users';
import UserItems from './components/users/UserItem'

class App extends React.Component {
  
  render(){
   
    
    return (
      <div className="App">
        <Navbar /> 
        <div className="container">
           <Users />
          
        </div>  
           
      </div>
       );
  }
}

export default App;
