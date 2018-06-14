import React, { Component } from 'react';
import AlbumRow from './AlbumRow';

export default class Album extends Component {

	constructor(props){
		super(props);
		this.state = { cols:4};
	}


	render() {
		
		let count = 0;
		let records = [];
		for (let i = 0; i < this.props.data.length; i+=this.state.cols) {
			records.push(<AlbumRow key={count} onClick={this.props.onSongSelect} data={this.props.data.slice(i,i+this.state.cols)} />);
			count++;
		}
		console.log(this.props.list);
		return (
			<div className="container-fluid album">
				{records}
			</div>
		);
	}
}
