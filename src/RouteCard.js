import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from "react-router-dom";


class RouteCard extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let id = this.props.id;
        return (
            <Card style={styles.card}>
                <CardContent>
                    <Typography style={styles.title} color="textSecondary">
                        {this.props.name}
                    </Typography>
                    {/*<Typography color="textSecondary" gutterBottom>*/}
                    {/*    {this.props.streetNo} {this.props.roadName}, {this.props.city}, {this.props.state} {this.props.zipCode}*/}
                    {/*</Typography>*/}
                    {/*<Typography style={styles.pos} color="textSecondary">*/}
                    {/*    Price: {this.props.price}*/}
                    {/*</Typography>*/}
                    {/*<Typography style={styles.pos} color="textSecondary">*/}
                    {/*    {this.props.description}*/}
                    {/*</Typography>*/}
                    <CardMedia
                        style={styles.media}
                        image="/image/0"
                        title="Property Image"
                    />
                </CardContent>
                <CardActions>
                    <Link to={"/property-details/"+id}>
                        <Button size="small">View Details</Button>
                    </Link>
                </CardActions>
            </Card>
        );
    }

}

const styles = {
    card: {
        minWidth: 275,
        margin: 20
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}

export default RouteCard;