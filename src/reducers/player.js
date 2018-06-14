import { ActionTypes } from '../constants';

const init = {playlist:[],
				songs:[{name:'abc'},
						{name:'xyz'},
						{name:'pqr'},
						{name:'mno'},
						{name:'ghi'}
					]	};

export const playlist = (state=init, action) => {

	switch(action.type){
		case ActionTypes.ADD_TO_PLAYLIST:
			return Object.assign({}, state, {
				playlist: [
				...state.playlist,
				{id:action.songId,name:action.songId}
			]})
		default:
			return state
	}
}

export default playlist;