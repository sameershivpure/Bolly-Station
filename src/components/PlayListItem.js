import React from 'react';

const PlayListItem = props => {
	const data = props.data;
	return(
		<div className="playlist-row">
			<div className="row ml-1">
				<span className="col-5 text-truncate">{data.name}</span>
				<span className="col-5">{data.movie}</span>
				<span className="col-2">{"00:00"}</span>
			</div>
			<div className="row ml-1">
				<span className="col-10"><i>Singers: abc, xyz, pqr</i></span>
				<span className="col-2 text-right pr-5">x</span>
			</div>
		</div>
		)
};

export default PlayListItem;