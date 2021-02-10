
class App extends React.Component {
  state = {
    value: "123"
  }

  handleInputChange(e)  {
    console.log(e.target.value);
    this.setState({value: e.target.value});
  }  
  render() {
    return (
      <React.Fragment>
        <input placeholder="Enter ..." onChange = {this.handleInputChange.bind(this)} type="text"/>
        <button>Reset</button>
        <h1 className='title'> {this.state.value} </h1>
      </React.Fragment>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));