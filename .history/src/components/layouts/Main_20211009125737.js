import React, { Component } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
// default layout
class MainLayout extends Component {
//inherited Parent options
constructor(props){
    super(props);
    this.state = {

    };
}
    render() {
        return (
            <>
                <Header/>
                <h2>hdjk</h2>
                <HomePage/>
                <Footer/>
                </>
        );
    }
}

export default MainLayout;