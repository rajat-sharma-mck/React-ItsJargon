import React from 'react';
import ReactDOM from 'react-dom';

// StateFull Component
class TextComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {text: this.props.text};
	}

	// react handler
	handleClick = () => {
		const updatedText = prompt('Update heading...', 'type here');
		this.setState(prevState => ({text: 'loading....'}));
		this.setState(prevState => ({text: 'loading....'}));
		this.setState(prevState => ({text: 'loading....'}));
		
		this.setState(prevState => ({text: updatedText || prevState.text}));
	}

	render() {
		return <div onClick={this.handleClick}>{this.state.text}</div>
	}
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
