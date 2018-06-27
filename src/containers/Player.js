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
			playlist:session.playlist,
			current_song: session.current_song
		}
	}

	headerState = (session) => {
		return {
			data:session.current_song
		};
	}

	render() {

		const PlayListStore = connect(this.mapStateToPlayList)(PlayList);
		const HeaderStore = connect(this.headerState)(PlayerHeader);

		return (
			<div className="">
				<PlayerButton onButtonClick={this.playerButtonHandler} />
				{this.state.showConsole && <PlayerConsole>
						<HeaderStore onClick={this.playerButtonHandler}/>
						<PlayListStore />
					</PlayerConsole>
				 }
			</div>
		);
	}
}
