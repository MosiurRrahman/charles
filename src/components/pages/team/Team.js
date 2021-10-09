import React, { Component } from 'react';
import Consultation from './Consultation';
import OurTeam from './OurTeam';
import ThemeInnerBanner from './ThemeInnerBanner';

class Team extends Component {
    render() {
        return (
            <>
             <ThemeInnerBanner/>  
             <OurTeam/>
             <Consultation/>
            </>
        );
    }
}

export default Team;