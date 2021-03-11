import React from 'react';
import './Team.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 5
    
  },
  media: {
    height: 150,
    backgroundSize: 'contain'
  },
});

const Team = (props) => {
    // destructuring single team
    const {strTeamBadge, strTeam, strSport, idTeam} = props.team;
    const classes = useStyles();
    // using history to push the team ID
    const history = useHistory();
    // handle button for showing team details
    const handleButton = (teamDetail) => {
        history.push(`/teamDetail/${idTeam}`)
    }
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={strTeamBadge}
                    title={strTeam}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {strTeam}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Football Type : {strSport}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="handle-button">
                <Button onClick={() => handleButton(props.team)} variant="contained" color="primary">
                    Explore<ArrowForwardIcon />
                </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Team;