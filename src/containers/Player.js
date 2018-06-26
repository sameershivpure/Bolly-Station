import React, { Component } from 'react';
import PlayerConsole, { PlayerButton, PlayerHeader } from '../components/PlayerConsole';
import { connect } from 'react-redux';
import PlayList from '../components/PlayList';

export default class Player extends Component {
	
	constructor(props){
		super(props);
		this.state= { showConsole:false };
	}

	playerButtonHandler = () => {
		this.setState((preState, nProp) => (
			{showConsole : !preState.showConsole}
		));
	}

	mapStateToPlayList = (session) => {
		return {
			playlist:session.playlist
		}
	}

	render() {

		const PlayListStore = connect(this.mapStateToPlayList)(PlayList);
		return (
			<div className="">
				<PlayerButton onButtonClick={this.playerButtonHandler} />
				{this.state.showConsole && <PlayerConsole>
						<PlayerHeader onClick={this.playerButtonHandler}/>
						<PlayListStore />
					</PlayerConsole>
				 }
			</div>
		);
	}
}
