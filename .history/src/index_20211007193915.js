import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Layout from "./components/app";
import defaultLayout from './components/layouts/Main';
// Initailizations All CSS
import './index.css';

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
            <Route exact path = '/' component={defaultLayout} />
            <Layout>
                
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
