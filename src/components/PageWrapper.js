import React from 'react';
import './PageWrapper.css';

const PageWrapper = (props) => {
	return (
			<div className="content">
				{props.children}
			</div>
	)
};

export default PageWrapper;