import React, { Component } from 'react';

export default class SearchBar extends Component {
	state = { text: '' };

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.text);
	};

	onInputChange = (e) => {
		this.setState({ text: e.target.value });
	};

	render() {
		return (
			<div className="ui container" style={{ marginBottom: '2rem' }}>
				<form className="ui form" onSubmit={this.onSubmit}>
					<div className="field">
						<input
							type="text"
							onChange={this.onInputChange}
							value={this.state.text}
						/>
					</div>
				</form>
			</div>
		);
	}
}
