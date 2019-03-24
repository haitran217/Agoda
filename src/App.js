import React, { Component } from 'react';
import './App.css';
import Header from "./components/header"
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from './router';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {this.showContentPage(routes)}
        </div>
      </Router>
    );
  }

  showContentPage = (routes) => {
    var result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return result;
  }
}

export default App;
