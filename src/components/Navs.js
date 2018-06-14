import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Navs extends Component {
	render() {
		return (
			<nav className="nav justify-content-center">
				<NavLink to='/home' className="nav-link" activeClassName='active'>Home</NavLink>
				<NavLink to='/about' className="nav-link" activeClassName='active'>About</NavLink>
			</nav>
		);
	}
}
