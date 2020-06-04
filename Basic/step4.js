class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: this.props.initialCount };
	}

  	handleClick = () => {
    	this.setState(prevState => ({ count: prevState.count + 1 }));
  	};

  	render() {
    	return React.createElement("div", { id: "count" }, [
      	React.createElement(
        "div",
        { className: "count-value" },
        `Count: ${this.state.count}`
    	),
      	React.createElement("button", { onClick: this.handleClick }, "Add")
    	]);
  	}
}

const counterWithZeroStart = React.createElement(Counter, { initialCount: 0 });

const rootElement = document.getElementById("root");
ReactDOM.render(counterWithZeroStart, rootElement);