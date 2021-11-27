import { Component } from "react";
import "./App.css";
import { CountContext } from "./context";
import Test from "./Test";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });

  render() {
    return (
      <div className="App">
        <h4>App Component</h4>
        <p>Count - {this.state.count}</p>
        <button onClick={this.increment}>Inc - App</button>
        <button onClick={this.decrement}>Dec - App</button>
        <button onClick={this.reset}>Res - App</button>

        <CountContext.Provider
          value={{
            count: this.state.count,
            increment: this.increment,
            decrement: this.decrement,
            reset: this.reset,
          }}
        >
          <Test />
        </CountContext.Provider>
      </div>
    );
  }
}

export default App;
