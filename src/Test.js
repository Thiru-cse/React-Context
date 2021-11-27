import { Component } from "react";
import { CountContext } from "./context";
import Test1 from "./Test1";

class Test extends Component {
    static contextType = CountContext;
    // this.context

  render() {
    return (
            <>
              <h4>Test Component</h4>
              <p>Count - {this.context.count}</p>
              <button onClick={this.context.increment}>Inc - App</button>
              <button onClick={this.context.decrement}>Dec - App</button>
              <button onClick={this.context.reset}>Res - App</button>
              <Test1 />
            </>
          );
        }}

export default Test;
