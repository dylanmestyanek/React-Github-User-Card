import React from 'react';
import axios from "axios"
import './App.css';

import CardContainer from "./components/CardContainer"
import Card from "./components/Card"

class App extends React.Component {
 constructor(){
   super();
   this.state={
     user: [],
     userFollowers: []
   }
 }

  componentDidMount(prevState, setState){
    axios.get("https://api.github.com/users/dylanmestyanek")
      .then(res => this.setState({ 
        user: [...this.state.user,  res.data]
      }))
      .catch(err => console.log("Whoops", err))
  }

  render(){
    return (
      <div className="App">
          <CardContainer user={this.state.user} />
      </div>
    );
  }
}

export default App;
