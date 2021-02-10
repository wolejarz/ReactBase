import React from 'react';
class App extends React.Component {
  state = {
    value: ""
  }
  render() {
    return (
      <React.Fragment>
        <input type="text"/>
        <button>Reset</button>
        <h1> </h1>
      </React.Fragment>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));