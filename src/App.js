import React, { Component } from "react";
import Person from "./Components/Person";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello!!</h1>
        <button
          style={{
            width: "100px",
            backgroundColor: "#007bff",
            color: "#ffffff",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onClick={this.toggleShow}
        >
          Profile Show
        </button>
        {this.state.show && <Person />}
      </div>
    );
  }
}
