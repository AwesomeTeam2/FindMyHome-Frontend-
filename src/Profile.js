import React from "react"
import PropertyCard from "./PropertyCard"


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            propertyCards: [],
            numOfResults: 5
        }
    }

    componentWillMount() {
        let cardList=[];
        for (let i = 0; i < this.state.numOfResults; ++i) {
            cardList.push(<PropertyCard parentContext={this}/>);
        }
        this.setState({propertyCards: cardList});
    }
    render() {
        return (
            <div>
                {this.state.propertyCards}
            </div>
        );
    }
}

export default Profile;