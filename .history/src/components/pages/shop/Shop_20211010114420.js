import React, { Component } from 'react';
import ShopFilter from './ShopFilter';
import ShopProduct from './ShopProduct';
import ThemeInnerBanner from './ThemeInnerBanner';
import ThemePagination from './ThemePagination';

class Shop extends Component {
    render() {
        return (
            <>   
            <ThemeInnerBanner/>
            <div className="shop-page section-spacing">
                <div className="container">
                    <ShopFilter/>
                    <ShopProduct/>
                    <ThemePagination/>
                </div>
            </div>
            </>
        );
    }
}

export default Shop;