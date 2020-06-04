import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.initialCount };
  }
  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div id="count">
        <div className="count-value">Count: {this.state.count}</div>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

const counterWithZeroStart = <Counter initialCount={0}/>;

const rootElement = document.getElementById("root");
ReactDOM.render(counterWithZeroStart, rootElement);
