import React, { Component } from 'react';
import ShopFilter from './ShopFilter';
import ThemeInnerBanner from './ThemeInnerBanner';

class Shop extends Component {
    render() {
        return (
            <>   
            <ThemeInnerBanner/>
            <div children="shop-page section-spacing">
                <div className="container">
                    <ShopFilter/>
                </div>
            </div>
            </>
        );
    }
}

export default Shop;