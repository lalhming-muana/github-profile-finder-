import './App.css';
import Navbar from './components/layout/Navbar'
import React, {Component, Fragment} from 'react';
import UserItem from './components/users/UserItem';

class App extends React.Component {
  
  render(){
   
    
    return (
      <div className="App">
        <Navbar />   
        <UserItem />   
      </div>
       );
  }
}

export default App;
