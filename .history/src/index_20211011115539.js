import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Layout from "./components/app";
import defaultLayout from './components/layouts/Main';
import PageNotFound from "./components/pages/404/PageNotFound";
import about from "./components/pages/about/about";
import BlogPage from "./components/pages/blog/BlogPage";
import BlogGridPage from "./components/pages/blogGrid/BlogGridPage";
import ServicePage from "./components/pages/service/ServicePage";
import ServiceDetailsPage from "./components/pages/serviceDetails/ServiceDetailsPage";
import Shop from "./components/pages/shop/Shop";
import ShopDetailsPage from "./components/pages/shopDetails/ShopDetailsPage";
import Team from "./components/pages/team/Team";
// Initailizations All CSS
import './index.css';

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
            <Route exact path = '/' component={defaultLayout} />
            <Layout>
                <Route path="/about" component={about}/>
                <Route path="/team" component={Team}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/shop-details" component={ShopDetailsPage}/>
                <Route path="/error" component={PageNotFound}/>
                <Route path="/service" component={ServicePage}/>
                <Route path="/service-details" component={ServiceDetailsPage}/>
                <Route path="/blog" component={BlogPage}/>
                <Route path="/blog-grid" component={BlogGridPage}/>
            </Layout>
        </Switch>
      </BrowserRouter>
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
