import React, { Component } from "react";
import axios from "axios";

class Jokes extends Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    console.log(token);
    const reqOptions = {
      headers: {
        Authorization: token
      }
    };
    axios
      .get("http://localhost:3300/api/jokes", reqOptions)
      .then(response => {
        this.setState({ jokes: response.data });
      })
      .catch(error => console.error("Error:", error));
  }

  render() {
    return (
      <div className="jokelist" style={{ marginTop: 30 + "px" }}>
        <h2>DEAD JOKES </h2>
        <ul />
        {this.state.jokes.map(joke => (
          <div>
            {" "}
            <li key={joke.id} className="card container">
              <p>THIS IS A {joke.type} JOKE</p> <br />
              <h3>{joke.setup}</h3> <br />
              <h4>{joke.punchline}</h4>
            </li>
          </div>
        ))}
      </div>
    );
  }
}

export default Jokes;
