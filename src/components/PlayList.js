import React, { Component } from 'react';
import './Player.css';
import { PlayListObject } from './ItemWrapper';

const List = props => {

	const data = props.songs.map(item => {
			return <PlayListObject key={item.id} data={item} />
		});

	if(data.length > 0)
		return(
			<div className="playlist-block">
				{ data }
			</div>
		);

	return null;
}

export default class PlayList extends Component {

	render() {
		return (
			<div className="player-body">
				<div className="player-details">
					<div className="player-info">
					</div>
					<div className="player-playlist">
						<List songs={this.props.playlist}/>
					</div>
				</div>
				<div className="player-controls">
					<button type="button" className="btn btn-success">Play</button>
				    <button type="button" className="btn btn-primary">Pause</button>
				    <button type="button" className="btn btn-danger">Stop</button>
				</div>
			</div>
		);
	}
}
