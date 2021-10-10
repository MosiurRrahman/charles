import React, { Component } from 'react';
import ThemeInnerBanner from './ThemeInnerBanner';

class Shop extends Component {
    render() {
        return (
            <div children="shop-page section-spacing">
                <div className="container">
                <ThemeInnerBanner/>

                </div>
            </div>
        );
    }
}

export default Shop;