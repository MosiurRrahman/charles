import React, { Component } from 'react';
import Footer from '../common/Footer';
import HomePage from '../pages/HomePage';
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
                <HomePage/>
                <Footer/>
            </div>
        );
    }
}

export default MainLayout;