import './ImageCard.css';
import React, { Component } from 'react';

export default class ImageCard extends Component {
	render() {
		const image = this.props.image;
		return (
			<div className="item">
				<img src={image.urls.regular} alt={image.description} />
			</div>
		);
	}
}
