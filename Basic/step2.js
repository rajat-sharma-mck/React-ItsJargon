// State Less React Component
function TextComponent(props) {
	props.text = 'modify'; // props are read-only
	return React.createElement('div', null, props.text);
}

ReactDOM.render( 
	React.createElement(
		'h1', 
		{id: 'app-header'},
		[
			TextComponent(),
			React.createElement(TextComponent, {text: 'Heading 2!!!'}),
			React.createElement(TextComponent, {text: 'Heading 3!!!'}),
			React.createElement(TextComponent, {text: 'Heading 4!!!'})
		]
	), 
 	document.getElementById('root')
);

