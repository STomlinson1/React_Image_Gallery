import './Header.css';
import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div id="header">
				<div className="ui header">
					<h1>Unsplash Image Search</h1>
					<p>To begin, enter a seach term below and press enter</p>
				</div>
			</div>
		);
	}
}
