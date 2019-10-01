import React from "react"
import Card from "./Card"
import styled from "styled-components"

class CardContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <UserList>
                    <h1>GitHub User Cards!</h1>
                {
                    this.props.user.map(user => <Card user={user} />)
                }
            </UserList>
        )
    }
}

export default CardContainer

const UserList = styled.div`
    width: 100%;
    margin: 0 auto;
    background: #247B66;
    padding-top: 50px;

    h1 {
        text-align: center;
    }
`;