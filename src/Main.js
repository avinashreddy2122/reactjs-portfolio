import Game from './Game';
import Home from './Home';
import Welcome from './Welcome';
import Board from './Board';
import css from './connect4.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch,Route, Link,  useParams} from "react-router-dom";
export default function App() {
  return (
    <Router>
		<div>
			<h2>CONNECT 4</h2><hr/>
			<Link to="/"  style={{ color: 'green' }} >Welcome</Link> &nbsp;&nbsp;&nbsp;
			<Link to="/home"  style={{ color: 'green' }} >Home</Link> &nbsp;&nbsp;&nbsp;
			<Link to="/game"  style={{ color: 'green' }} >Game</Link> &nbsp;&nbsp;&nbsp;
			<hr/>
		</div>		
		<Switch>
		  <Route exact path="/">
			<Welcome />
		  </Route>
		  <Route path="/home">
			<Home />
		  </Route>
		  <Route path="/game">
			<Game />
		  </Route>
		</Switch>
	</Router>
  );
}

