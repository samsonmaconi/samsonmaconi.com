import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import { Site, CoverPage } from '../../routes';


class App extends Component {
  constructor() {
    super();
    this.changeNavbarTheme = this.changeNavbarTheme.bind(this);

    this.state = {
      logo: { 
        dark: "./img/img_logo_00.png",
        light: "./img/img_logo_00.png"},
      appTitle: "Samson Maconi",
      //Navbar
      navbarTheme: "dark"
    }
  }

  changeNavbarTheme(theme) {
    if(this.state.navbarTheme !== theme)
      this.setState({ navbarTheme: theme });
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>

            <Route exact path='/' render={
              (props) => {
                return (<CoverPage logo={this.state.logo} appTitle={this.state.appTitle} />);
              }
            } />

            <Route path='/' render={
              (props) => {
                return (
                  <Site logo={this.state.logo} appTitle={this.state.appTitle} navbarTheme={this.state.navbarTheme} routerData={props} />
                );
              }
            } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
