import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Layout from "./components/app";
// Initailizations All CSS
import './index.css';

class Root extends Component {
  render() {
    return (
      <>
        <Layout />
      </>
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
