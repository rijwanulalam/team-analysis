import React from 'react';
import './Header.css'

const Header = (props) => {
    const teamLogo = props.strTeamBadge;
    return (
        <div className="header">
            {
                // conditional rendering for showing logo
                typeof teamLogo !== "undefined" ? <img src={teamLogo}></img> : <h1>Team Analysis</h1>
            }
            
        </div>
    );
};

export default Header;