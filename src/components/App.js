import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import unsplash from '../api/Unsplash';
import ImageList from './ImageList';

export default class App extends Component {
	state = { images: [] };

	submitRequest = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params : {
				query    : term,
				per_page : 30
			}
		});

		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div>
				<Header />
				<div className="ui container">
					<SearchBar onSubmit={this.submitRequest} />
					<ImageList images={this.state.images} />
				</div>
			</div>
		);
	}
}
