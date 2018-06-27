import { ActionTypes } from '../constants';

const init = {playlist:[],
				songs:[{id:1, name:'abc', movie:'mov1'},
						{id:2, name:'xyz', movie:'mov2'},
						{id:3, name:'pqr', movie:'mov3'},
						{id:4, name:'mno', movie:'mov4'},
						{id:5, name:'ghi', movie:'mov5'}
					],
				current_song : null
					};

export const playlist = (state=init, action) => {

	switch(action.type){
		case ActionTypes.ADD_TO_PLAYLIST:
			if (state.playlist.find((item) => {	return item.id === action.songId;}))
				return state;

			return Object.assign({}, state, {
				playlist: [
				...state.playlist,...state.songs.filter(item => {
						return item.id === action.songId;
						})
				],
				current_song : state.current_song ? state.current_song : state.songs.find((item) => {return item.id === action.songId;})
			});
		default:
			return state;
	}
}

export default playlist;