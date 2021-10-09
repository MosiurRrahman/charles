import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Layout from "./components/app";
import defaultLayout from './components/layouts/Main';
import about from "./components/pages/about/about";
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
