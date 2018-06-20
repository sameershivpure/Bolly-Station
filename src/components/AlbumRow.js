import React, { Component } from 'react';
import AlbumItem from './AlbumItem';

export default class AlbumRow extends Component {
	
	render() {

		let row = this.props.data.map(item => {
			return <AlbumItem key={item.id} onClick={this.props.onClick} data={item}/>
		});
		return (
			<div className="clearfix row album-row">
				{ row }
			</div>
		);
	}
}
