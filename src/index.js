import React from 'react';
import ReactDOM from 'react-dom';
import APP from './components/APP';
import { BrowserRouter,Route,Link } from 'react-router-dom';

ReactDOM.render((
	<BrowserRouter>
		<APP />	
	</BrowserRouter>), document.getElementById('root')
);

