import axios from 'axios';
import key from './apiKey';

export default axios.create({
	baseURL : 'https://api.unsplash.com/',
	headers : {
		Authorization : `Client-ID ${key}`
	}
});
