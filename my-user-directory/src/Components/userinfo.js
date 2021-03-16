import React, {Component} from 'react';


class UserInfo extends Component { 
    constructor (){
        super();
        this.state = {

        };
    }



    render(){
        console.log("user info props",this.props)
        const {user} = this.props
        return(
            <div className="User-display">
                <h4 className="page-number">{user.id}/25</h4>
                <h1 className="user-name">{user.name.first} {user.name.last} </h1>
                <h2>From: {user.city}, {user.country}</h2> 
                <h2>Job Title: {user.title} </h2>
                <h2>Employer: {user.employer} </h2>
                <br></br>
                <h4>Favorite Movies: 
                    <ol><li>{user.favoriteMovies[0]}</li>
                    <li>{user.favoriteMovies[1]}</li>
                    <li>{user.favoriteMovies[2]}</li></ol></h4>                
            </div>
        )
    }
}

export default UserInfo
