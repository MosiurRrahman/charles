import React, { Component } from 'react';
import OurTeam from './OurTeam';
import ThemeInnerBanner from './ThemeInnerBanner';

class Team extends Component {
    render() {
        return (
            <>
             <ThemeInnerBanner/>  
             <OurTeam/>
            </>
        );
    }
}

export default Team;