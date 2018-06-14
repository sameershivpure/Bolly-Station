import React, { Component } from 'react';
import PlayerConsole, { PlayerButton } from '../components/PlayerConsole';
import PlayList from './PlayList';
import './Player.css';

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

	render() {
		return (
			<div className="">
				<PlayerButton onButtonClick={this.playerButtonHandler} />
				{this.state.showConsole && <PlayerConsole closeConsole={this.playerButtonHandler}>
						<PlayList />
					</PlayerConsole>
				 }
			</div>
		);
	}
}
