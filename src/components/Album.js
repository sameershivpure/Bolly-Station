import React, { Component } from 'react';
import { AlbumObject } from './ItemWrapper';

const AlbumRow = props =>{

	const {data, ...methods} = props;
	let row = data.map(item => {
			return <AlbumObject key={item.id} {...methods} data={item}/>
		});
	
	return (
		<div className="clearfix row album-row">
			{ row }
		</div>
	);
}

export default class Album extends Component {

	constructor(props){
		super(props);
		this.state = { cols:5};
	}

	render() {
		
		let records = [];
		const {data, ...otherProps} = this.props;
		for (let i = 0; i < data.length; i+=this.state.cols) {
			records.push(<AlbumRow key={i} {...otherProps} data={data.slice(i,i+this.state.cols)} />);
		}
	
		return (
			<div className="container-fluid album">
				{records}
			</div>
		);
	}
}
