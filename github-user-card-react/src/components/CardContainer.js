import React from "react"
import Card from "./Card"

class CardContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            // <h1>hi</h1>
            this.props.user.map(user => <Card user={user} />)
        )
    }
}

export default CardContainer