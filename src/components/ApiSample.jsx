import React from "react";
import axios from "axios";



const ApiSample = () => {
	const URL = 'https://jsonplaceholder.typicode.com/posts';

	axios.get(URL).then(res => {
  		console.log(res.data);
	});
	return (
		<h1> hello </h1>
		);

};

export default ApiSample;