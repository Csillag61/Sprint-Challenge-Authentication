import React, { Component } from 'react';
import { Route, Link, withRouter } from "react-router-dom";
import './App.css';
import { Jumbotron } from 'reactstrap';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Jokes from './components/Jokes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false
    };
  }
  logOut = event => {
    localStorage.removeItem("jwt");
    this.props.history.push("/signin");
  };

  render() {
    return <div className="App">
      <Jumbotron>
        <Link to="/login">
          <button>Login page</button>{" "}
        </Link>
        <Link to="/register">
          <button>Register page</button>{" "}
        </Link>
        <Link to="/jokes">

          <button>Jokes</button>{" "}

        </Link>
        <button onClick={this.logOut}>Log out</button>
        <h1>DO YOU WANT A KILLER JOKE?</h1>
        <Route path="/register" render={props => <SignUp {...props} />} />
        <Route path="/login" render={props => <SignIn {...props} />} />
        <Route path="/jokes" render={props => <Jokes {...props} />} />
      </Jumbotron>
    </div>;
  }
}

export default withRouter(App);