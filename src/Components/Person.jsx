import React, { Component } from 'react'

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "rahma",
      bio: "Network Engineer Certificates",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvnK5W9r8gB32FTGBQOLRgALlkFdNkRRtPA&s",
      profession: "IT Engineer",
      counter:0,
    };
  }
  componentDidMount() {
    // Start the timer when the component mounts
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000); // Update every 1 second
  }

  componentWillUnmount() {
    // Clean up the timer when the component unmounts
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <p>Timer:{this.state.counter}</p>
        <p>{this.state.fullname}</p>
        <p>{this.state.bio}</p>
        <img src={this.state.imgsrc} alt="" />
        <p>{this.state.profession}</p>
      </div>
    );
  }
}
