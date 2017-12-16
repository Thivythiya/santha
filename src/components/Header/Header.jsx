import React, {Component} from 'react';
import './headerStyle';
export default class Header extends Component{
	constructor(){
		super()
	}
	render(){
		return <div className="appheader">
				<div>
					<h2>Santha</h2>
				</div>
				<div>
					<ul>
						<li><a href="#">Men</a></li>
						<li><a href="#">Women</a></li>
						<li><a href="#">Kids</a></li>
						<li><a href="#">Home & living</a></li>
					</ul>
				</div>
				<p></p>
		</div>
	}
}  