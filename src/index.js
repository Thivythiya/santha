import React from 'react';
import ReactDOM from 'react-dom';
import APP from './components/APP';
import { Router,Route,Link } from 'react-router-dom';


import customHistory from './components/History/customHistory';


ReactDOM.render(
	<Router history={customHistory}>
		<APP />	
	</Router>, document.getElementById('root')
);

