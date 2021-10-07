import React, { Component } from 'react';
import Layout from './components/app';

class Root extends Component {
    render() {
        return (
            <>
               <Layout/> 
            </>
        );
    }
}



ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <Root />
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById("root")
);