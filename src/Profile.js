import React from "react"
import axios from "axios"
import RaisedButton from "material-ui/RaisedButton"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "You are not logged in",
            commuteRoutes:[]
        }
    }

    componentDidMount() {
        // remote request to get user's saved routes
        let url = "/api/route";
        let token = localStorage.getItem("token");
        const options = {
            headers: {'Authorization': token}
        };

        axios.get(url, options)
            .then((response) => {
                console.log(response);

                // display the returned routes
                let routes = [];
                let numOfResults = response.data.length;
                for (let i = 0; i < numOfResults; ++i) {
                    let data = response.data[i];
                    // routes.push(<PropertyCard
                    //     id={data.id}
                    //     price={data.price}
                    //     description={data.description}
                    //     streetNo={data.address.streetNo}
                    //     roadName={data.address.roadName}
                    //     city={data.address.city}
                    //     state={data.address.state}
                    //     zipCode={data.address.zipCode}
                    // />);
                }
                this.setState({commuteRoutes:routes});
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div>
                Username: {this.state.username}
                <br />
            <MuiThemeProvider>
                <RaisedButton label="See my name" primary={true} style={style} onClick={() => this.handleClick()}/>
            </MuiThemeProvider>
            </div>
        );
    }

    handleClick = () => {
        let url = "/hello/name";
        let token = localStorage.getItem("token");
        const options = {
            headers: {'Authorization': token}
        };

        axios.get(url, options)
            .then((response) => {
                console.log(response);
                let username = response.data;
                this.setState({
                    username: username
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
const style = {
    margin: 15,
};
export default Profile;