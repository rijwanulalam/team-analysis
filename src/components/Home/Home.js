import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header'
import Team from '../Team/Team';
import './Home.css'

const Home = () => {
    // useState for loading data and storing data
    const [teams, setTeams] = useState([]);
    // useEffect for catch the url to load data
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])
    
    return (
        <div>
            <Header />
            <div className="show-teams">
                <Grid container spacing={3} direction-xs-column direction="row" align="center" justify="center" align-items="center">
                {
                    // using map for single team
                    teams.map(team => <Grid item sm={4} xs={12}> <Team team={team}></Team> </Grid>)
                }
                </Grid>
            </div>
            
        </div>
    );
};

export default Home;