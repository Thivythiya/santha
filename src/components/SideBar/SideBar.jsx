import React, {Component} from 'react';
import './SideBarStyle';

let category = ['sensairy','books','home appliances'];
let prices = ['100 to 1000', '1000 to 5000', '5000 to 10000', '10000 to 20000', '20000 above'];
export default class SideBar extends Component{
	
	constructor(){
		super()
	}

	render(){
		let {onCheckedFilter,onCheckedFilterPrice} = this.props;
		return (<div className="sidebar-div">
					<div>
						<h4>Categories</h4>
						<ul> 
							{
								category.map((brand,i) => {
									return <li key={i}>
										<input 
											onChange={onCheckedFilter}
											type="checkbox"
											value={brand} 

										/>{brand}</li>
								})
							}	
						</ul>
					</div>
					<div>
						<h4>Price</h4>
						<ul>
							{
								prices.map((price,i) => {
									return <li key={i}>
										<input 
											onChange = {onCheckedFilterPrice} 
											type="checkbox" 
											value = {price}
											/>{price}</li>
								})
							}
						</ul>
					</div>
			</div>
		);
	}
}


