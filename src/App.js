import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" , company : "" };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeCompany(event) {
    this.setState ({company : event.target.value})
  }
  handleSubmit(event) {
    alert(" Name: " + this.state.name + " \n Company: " + this.state.company);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Controlled Form Example</h1>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </label><br/>
        <label>
          Company Name:
          <input
            type="text"
            value={this.state.company}
            onChange={this.handleChangeCompany}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default App;