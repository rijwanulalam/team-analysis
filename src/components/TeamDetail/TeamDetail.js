import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './TeamDetail.css'
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import WcIcon from '@material-ui/icons/Wc';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import female from '../../assets/female.png'

const TeamDetail = (props) => {
    // useParams for getting the team id from url
    const {teamId} = useParams();
    // using useState for load data by using team ID
    const [ teamDetail, setTeamDetail ] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
         .then(res => res.json())
         .then(data => setTeamDetail(data.teams[0]))
    } ,[teamId])
    // destructuring
    const {strTeam, strSport, strTeamBadge, strDescriptionEN, strCountry, intFormedYear, strGender, strTeamFanart3, strFacebook, strTwitter, strYoutube} = teamDetail;
    return (
        <div>
            {/* Header */}
            <Header strTeamBadge={strTeamBadge} />
            {/* Team Description */}
            <div className="info-background">
                <div  className="info-team">
                    <div>
                        <h2>{strTeam}</h2>
                        <div className="info-text"><BlurCircularIcon /><p> Founded : {intFormedYear}</p></div>
                        <div className="info-text"><CheckBoxOutlineBlankIcon /><p> Country : {strCountry}</p></div>
                        <div className="info-text"><SportsSoccerIcon /><p>Sports Type : {strSport}</p></div>
                        <div className="info-text"><WcIcon /><p>Gender : {strGender}</p></div>
                    </div>
                    {
                        strGender ==='Male' ? <img src={strTeamFanart3} alt={strTeam} style={{height:'200px', width:'300px'}}/> : <img src={female} alt={female} style={{height:'200px', width: '300px'}} />
                    }
                        
                </div>
                <div>
                    <p>
                        {strDescriptionEN}
                    </p>
                </div>
                {/* Footer */}
                <footer>
                    <div className="footer-text">
                        <a href={`https://${strFacebook}`}><FacebookIcon style={{fontSize: '58px'}}/></a>
                        <a href={`https://${strTwitter}`}><TwitterIcon style={{fontSize: '58px'}} /></a>
                        <a href={`https://${strYoutube}`}><YouTubeIcon style={{fontSize: '58px'}}/></a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default TeamDetail;