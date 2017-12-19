import React, {Component} from 'react';
import './headerStyle';
export default class Header extends Component{
	constructor(){
		super()
	}
	render(){
			
		console.log("on recieving cart cout", this.props);

		return <div id="appheader">
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
				<div className="cart-details">
					<span className="svg-shopping-icon"><i className="fa fa-shopping-bag" aria-hidden="true"></i></span>
					<span className="cart-count"><span>{this.props.countValue}</span></span>
				</div>
				
				<div className="searchbar">
					<input type="search" placeholder="Search the products" />
				</div>
		</div>
	}
}  