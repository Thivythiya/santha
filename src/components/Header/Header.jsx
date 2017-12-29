import React, {Component} from 'react';
import './headerStyle';
import { Link } from 'react-router-dom';


import customHistory from '../History/customHistory';

export default class Header extends Component{
	constructor(){
		super()
	}

	passClickChange(val){
		this.props.onClickChange(val);
		customHistory.push('/');
	}
	render(){
			
		console.log("on recieving cart cout", this.props);
		let {category,cartItems} = this.props;

		return <div id="appheader">
				
				<div>
				<div>
					<h2 onClick={this.passClickChange.bind(this,'')}>Santha</h2>
				</div>

				<div>
					<ul> 
					{
						category.map((menu,i) => {
							return <li key={i} onClick={this.passClickChange.bind(this,menu)}>{menu}</li>
						})
					}	
					</ul>
				</div>
		
				<Link to="/cart_details">
					<div className="cart-details">
						<span className="svg-shopping-icon"><i className="fa fa-shopping-bag" aria-hidden="true"></i></span>
						<span className="cart-count"><span>{cartItems.length}</span></span>
					</div>
				</Link>
				</div>

				<div className="searchbar">
					<input type="search" placeholder="Search the products" />
				</div>
		</div>
	}
}  
