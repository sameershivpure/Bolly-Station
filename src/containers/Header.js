import React,{Component } from 'react';
import logo from '../logo.png';
import './Station.css';
import Navs from '../components/Navs';

class Header extends Component{

	render(){
		return (
			<div className="header container-fluid">
				<header className="row">
					<div className="col-6 header-content">
						<img src={logo} className="logo" alt="logo" /><h1 className="header-name">Bolly Music Station</h1>
					</div>
					<div className="col-6 navigation">
						<Navs />
					</div>
				</header>
			</div>
		)
	}
}

export default Header;