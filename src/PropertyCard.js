import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class PropertyCard extends React.Component {
    render() {
        return (
            <Card style={styles.card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {this.props.streetNo}
                        {this.props.roadName},
                        {this.props.city},
                        {this.props.state}
                        {this.props.zipCode}
                    </Typography>
                    <Typography style={styles.pos} color="textSecondary">
                        Price: {this.props.price}
                    </Typography>
                    <Typography style={styles.pos} color="textSecondary">
                        {this.props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => this.handleClick()}>View Details</Button>
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
    }
}

export default PropertyCard;