import React from "react"

class Card extends React.Component {

    render(){
        return(
            <div>
                <img src={this.props.user.avatar_url} alt="GitHub User" />
                <h1>{this.props.user.name}</h1>
                <p>{this.props.user.location}</p>
                <p>Profile: <a href={this.props.user.html_url}>{this.props.user.html_url}</a></p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
                <p>Bio: {this.props.user.bio}</p>
                <button>View Git History</button>
            </div>
        );
    }
}

export default Card