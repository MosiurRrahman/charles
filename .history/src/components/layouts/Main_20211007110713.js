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
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default MainLayout;