import React, { Component } from 'react';
import Error from './Error';
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