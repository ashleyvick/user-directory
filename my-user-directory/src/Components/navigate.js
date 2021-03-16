import React, {Component} from 'react';


class Navigate extends Component { 
    constructor (){
        super();
        this.state = {

        };
    }

    render(){
        console.log('where are you?')
        return(
            <div className= "navButtons">
                <button className="Nav" onClick={this.props.previous} >&#60; Previous</button>
                <div className="middle">
                    <button className="Update-user">Edit</button>
                    <button className="Update-user">Delete</button>
                    <button className="Update-user">New</button>
                </div> 
                <button className="Nav" onClick={this.props.next} >Next &#62;</button>

                
            </div>
        )
    }
}

export default Navigate
