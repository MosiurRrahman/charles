import React, { Component } from 'react';
import ThemeInnerBanner from './ThemeInnerBanner';

class PageNotFound extends Component {
    render() {
        return (
            <>
             <ThemeInnerBanner/>  
             <Error/> 
            </>
        );
    }
}

export default PageNotFound;