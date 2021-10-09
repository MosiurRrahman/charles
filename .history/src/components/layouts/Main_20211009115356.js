import React, { Component } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import HomePage from '../HomePage';
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
            <div className="main-page-wrapper">
                <Header/>
                <h2>hdjk</h2>
                <HomePage/>
                <Footer/>
            </div>
        );
    }
}

export default MainLayout;