import React from 'react';

import './styles.css';

class Form extends React.Component {
	constructor() {
		super();

		this.state = {
			name: '',
			age: ''
		}
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({
			name: '',
			age: ''
		});

		alert('Form submitted, and sent to DB.');
	};

	render() {
		return (
			<>
			<form>
				<label>Name:
					<input
						onChange={this.handleInputChange}
						type="text"
						name="name"
						value={this.state.name}
					/>
				</label>

				<label>Age:
					<input
						onChange={this.handleInputChange}
						type="text"
						name="age"
						value={this.state.age}
					/>
				</label>

				<button onClick={this.handleSubmit}>Submit</button>
			</form>

			<div>
				{this.state.name && this.state.age ?
				<h1>Hello {this.state.name}, I hear you are {this.state.age} years old</h1> :
				<h1>I don't know you yet!</h1>}
				
			</div>
			</>
		);
	}
}

export default Form;