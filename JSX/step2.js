import React from 'react';
import ReactDOM from 'react-dom';

// State Less React Component
function TextComponent(props) {
	props.text = 'modify'; // props are read-only
	return <div>{props.text}</div>;
}

ReactDOM.render( 
	<h1 id='app-header'>
		<TextComponent text='Heading 1!!!'/>
		<TextComponent text='Heading 2!!!'/>
		<TextComponent text='Heading 3!!!'/>
		<TextComponent text='Heading 4!!!'/>
	</h1>, 
 	document.getElementById('root')
);

