import React, {Component} from 'react';
import Navigate from './Components/navigate';
import UserInfo from './Components/userinfo'
import data from './data.js'
import './App.css'


class App extends Component { 
    constructor (){
        super();
        this.state = {
          users: data,
          index: 0
        };
    }

    nextUser = () => {
      this.setState({index: this.state.index+1})
    }

    previousUser = () => {
      this.setState({index: this.state.index-1})
    }


    render(){
      // console.log("App date", this.state)
        return(
            <div className="App">
              <div className="Header">
                <h2 className="home">Home</h2>
              </div>
              <div className="idCard">
                <UserInfo user={this.state.users[this.state.index]}/>
              </div>
              <div className="navButtons">
                <Navigate next={this.nextUser} previous={this.previousUser}></Navigate>
              </div>
            </div>
        )
    }
}

export default App;

