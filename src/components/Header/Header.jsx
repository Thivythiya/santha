import React, {Component} from 'react';
import './headerStyle';
import { Link } from 'react-router-dom';
export default class Header extends Component{
	constructor(){
		super()
	}

	passClickChange(val){
		this.props.onClickChange(val);
	}

	render(){
			
		console.log("on recieving cart cout", this.props);
		let {category} = this.props;
		//let {category,onClickChange} = this.props;

		return <div id="appheader">
				
				<div>
				<div>
					<h2><Link to="/">Santha</Link></h2>
				</div>

				<div>
					<ul> 
					{
						category.map((menu,i) => {
							return <li key={i} onClick={this.passClickChange.bind(this,menu)} >{menu}</li>
						})
					}	
					</ul>
				</div>
		
				<Link to="/cart_details">
					<div className="cart-details">
						<span className="svg-shopping-icon"><i className="fa fa-shopping-bag" aria-hidden="true"></i></span>
						<span className="cart-count"><span>{this.props.countValue}</span></span>
					</div>
				</Link>
				</div>

				<div className="searchbar">
					<input type="search" placeholder="Search the products" />
				</div>
		</div>
	}
}  