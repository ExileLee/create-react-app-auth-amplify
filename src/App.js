import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import axios from "axios";
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {

  render() {
    const apiBaseUrl = "https://api.boyilab.com";

    const api = axios.create({
        baseURL: apiBaseUrl
    });

    api.get("artists/the-1975")
      .then(x => {
        console.log(x.data);
      })

    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
