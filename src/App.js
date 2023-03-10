import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import React, {Component, Fragment} from 'react';
import Users from './components/users/Users';
import Search from './components/users/Search';
import UserItems from './components/users/UserItem';
import axios from 'axios';

class App extends React.Component {

  state= {
    users: [],
    loading: false,
    alert: null
  }

  async componentDidMount(){
    
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    this.setState({users: res.data, loading:false});

  }

  searchUsers= async text =>{
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    this.setState({users: res.data.items, loading:false});
    console.log(text);
  }

//Clear users
clearUsers=()=>{
  this.setState({users: [], loading: false });
}

// set Alert
setAlert = (msg, type) =>{
  this.setState({alert:{msg, type}});

  setTimeout(() => {
    this.setState({alert: null});
  }, 5000);
}


  render(){
   
    const {loading, users} = this.state;

    return (
      <div className="App">
        <Navbar /> 
        <div className="container">
          <Alert alert={this.state.alert} />
           <Search searchUsers={this.searchUsers} 
                   clearUsers={this.clearUsers} 
                   showUsers={users.length>0 ? true: false}
                   setAlert={this.setAlert}/>

           <Users loading={loading} users={users}/>
          
        </div>  
           
      </div>
       );
  }
}

export default App;
