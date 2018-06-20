import React from 'react';
import './Album.css';

const AlbumItem = props => {
	const record = props.data;
	return (
		<div className="card album-item" onClick={()=> props.onClick(record.id)}>
		  <div className="card-body">
		    { record.name }
		  </div>
		</div>
	);
}

export default AlbumItem;