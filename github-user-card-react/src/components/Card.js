import React from "react"
import styled from "styled-components"

class Card extends React.Component {

    render(){
        return(
            <CharacterCard>
                <img src={this.props.user.avatar_url} alt="GitHub User" />
                <CharacterText>
                    <h1>{this.props.user.name}</h1>
                    <p><em>{this.props.user.login}</em></p>
                    <p>{this.props.user.location ? this.props.user.location : <em>null</em>}</p>
                    <p>Profile: <a href={this.props.user.html_url}>{this.props.user.html_url}</a></p>
                    <p>Followers: {this.props.user.followers}</p>
                    <p>Following: {this.props.user.following}</p>
                    <p>Bio: {this.props.user.bio}</p>
                </CharacterText>
                {/* <button>View Git History</button> */}
            </CharacterCard>
        );
    }
}

export default Card

const CharacterCard = styled.div`
    width: 50%;
    background: linear-gradient(#8BDBD8, #407C9F);
    display: flex;
    align-items: center;
    margin: 20px auto;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px 1px black;

    img {
        width: 20%;
        border-radius: 3px;
    }
`;

const CharacterText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    padding-left: 10px;

    h1 {
        font-size: 1.5rem;
        margin: 0;
        margin-top: -5px;
    }

    p {
        font-size: .8rem;
        margin: 1px 0;
    }
`;