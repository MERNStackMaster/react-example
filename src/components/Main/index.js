import React from 'react';

class Main extends React.Component {
	constructor() {
		super();

		this.state = {
			comments: []
		};
	}

	handleGetComments = () => {
		fetch('https://jsonplaceholder.typicode.com/comments')
			.then(res => res.json())
			.then((data) => {
				console.log(data);
				this.setState({
					comments: data
				})
			})
			.catch((err) => console.log(err));
	};

	handleDelComments = () => {
		this.setState({
			comments: []
		});
	};

	componentDidMount() { // very similar to document.ready() eg. When the component loads and is ready
		
	}

	render() {
		return (
			<main>
				<button onClick={this.handleGetComments}>Get Comments</button>
				<button onClick={this.handleDelComments}>Delete Comments</button>

				{this.state.comments.map((comment) => {
					return (
						<div key={comment.id}>
							<h2>{comment.name}</h2>
							<p>{comment.body}</p>
							<a href={'mailto:' + comment.email} target="_blank" rel="noopener noreferrer">{comment.email}</a>
						</div>
					);
				})}
			</main>
		);
	}
}

export default Main;