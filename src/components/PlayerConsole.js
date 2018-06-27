import React, { Component } from 'react';

export const PlayerButton = props => {

	return(
		<div>
			<button className="btn btn-outline-success player-toggle-btn" onClick={() => props.onButtonClick()}>Player</button>
		</div>
		)
};

export const PlayerHeader = props => {
	return(
		<div className="player-header">
			<div className="player-title">{props.data ? props.data.name : "Now playing..."}</div>
			<button className="btn btn-outline player-close" onClick={() => props.onClick()}>X</button>
		</div>
	)
};

export default class PlayerConsole extends Component {
	render() {
		return (
			<div className="player-console">
				<div className="player-content">
					{ this.props.children }
				</div>
			</div>
		);
	}
}
