import React, { Component } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
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
            <div>
                <Header/>
                <HomePage/>
                <Footer/>
            </div>
        );
    }
}

export default MainLayout;