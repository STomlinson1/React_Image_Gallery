import React, { Component } from 'react';
import ImageCard from './ImageCard';
import Masonry from 'react-masonry-component';

export default class ImageList extends Component {
	render() {
		const images = this.props.images.map((image) => {
			return <ImageCard image={image} key={image.id} />;
		});

		return <Masonry className="masonry">{images}</Masonry>;
	}
}
