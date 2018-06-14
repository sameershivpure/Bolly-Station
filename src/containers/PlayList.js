import React, { Component } from 'react';

export default class PlayList extends Component {
	render() {
		return (
			<div className="player-body">
				<div className="player-details">
					<div className="player-info">
					</div>
					<div className="player-playlist">
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
