import React from 'react';
import './Album.css';
import { imgUrl} from '../constants';
import music_img from '../music.svg';

const AlbumItem = props => {
	const record = props.data;
	return (
		<div className="card album-item" onClick={()=> props.onClickHandle(record.id)}>
			<img src={music_img} className="card-img-top album-img" alt="music" />
			<div className="card-body">
				<div className="card-title">{ record.name }</div>
			    <div className="card-subtitle">{ record.movie}</div>
			</div>
		</div>
	);
}

export default AlbumItem;