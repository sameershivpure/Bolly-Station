import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './Station.css';

import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import About from './About';
import Player from './Player';
import playlist from '../reducers/player';

const session = createStore(playlist);

class Station extends Component {
  render() {
  	console.log(session.getState());
    return (
    <Provider store={session} >
      <BrowserRouter>
	      <div className="station">
	        <Header />

	        <div className="container main">
		        <Route path="/" exact component={Dashboard} />
		        <Route path="/home" component={Dashboard} />
		        <Route path="/about" component={About} />

		    <Player />
	        </div>
	        <Footer />
	      </div>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default Station;
