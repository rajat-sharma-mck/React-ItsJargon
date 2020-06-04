// StateFull Component
class TextComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {text: this.props.text};
	}

	handleClick = () => {
		const updatedText = prompt('Update heading...', 'type here');
		this.setState(prevState => ({text: updatedText || prevState.text}));
	}

	render() {
		return React.createElement('div', {onClick: this.handleClick}, this.state.text);
	}
}

ReactDOM.render( 
	React.createElement(
		'h1', 
		{id: 'app-header'},
		[
			React.createElement(TextComponent, {text: 'Heading 1!!!'}),
			React.createElement(TextComponent, {text: 'Heading 2!!!'}),
			React.createElement(TextComponent, {text: 'Heading 3!!!'}),
			React.createElement(TextComponent, {text: 'Heading 4!!!'})
		]
	), 
 	document.getElementById('root')
);
