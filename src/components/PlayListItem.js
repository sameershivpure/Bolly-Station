import React from 'react';

const PlayListItem = props => {
	const data = props.data;
	return(
		<div className="playlist-row">
			<div className="row ml-1">
				<span className="col-10">{data.name}</span>
				<span className="col-2">{"00:00"}</span>
			</div>
			<div className="row ml-1">
				<span className="col-12">{data.movie}</span>
			</div>
		</div>
		)
};

export default PlayListItem;