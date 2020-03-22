import './ImageList.css';
import React, { Component } from 'react';
import ImageCard from './ImageCard';

export default class ImageList extends Component {
	render() {
		const images = this.props.images.map((image) => {
			return <ImageCard image={image} key={image.id} />;
		});

		return (
			<div className="ui container">
				<div className="imagelist">{images}</div>
			</div>
		);
	}
}
