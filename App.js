class App extends React.Component {
  state = {
    value: "123",
  };

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  handleButtonClick = (e) => {
    this.setState({ value: "" });
  };
  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.value}
          placeholder="Enter ..."
          onChange={this.handleInputChange}
          type="text"
        />
        <button onClick={this.handleButtonClick}>Reset</button>
        <h1 className="title"> {this.state.value.toUpperCase()} </h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
