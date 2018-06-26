import React,{Component} from 'react';
import { connect } from 'react-redux';
import PageWrapper from '../components/PageWrapper';
import Album from '../components/Album';
import {addToPlaylist} from '../actions';


class Dashboard extends Component{
	constructor(props){
		super(props);
		this.mapStateToAlbum = this.mapStateToAlbum.bind(this);
		this.mapDispatchToProps = this.mapDispatchToProps.bind(this);
	}

	mapStateToAlbum(session){
		return {
			data: session.songs
		}
	}

	mapDispatchToProps(dispatch){
		return{
			onClick : id => { dispatch(addToPlaylist(id))}
		}
	}

	render(){

		const AlbumStore = connect(this.mapStateToAlbum, this.mapDispatchToProps)(Album);

		return (
			<PageWrapper>
					<h2>Songs</h2>
					<AlbumStore />
			</PageWrapper>
		)	
	}
}

export default Dashboard;