import {ActionTypes} from '../constants';

export const addToPlaylist = (songId) => {
	return {
		type: ActionTypes.ADD_TO_PLAYLIST,
		songId
	}
};