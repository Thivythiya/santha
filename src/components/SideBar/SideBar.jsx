import React, {Component} from 'react';
import './SideBarStyle';

let category = ['sensairy','books','home appliances'];

export default class SideBar extends Component{
	
	constructor(){
		super()
	}

	render(){
		let {onCheckedFilter,onCheckedFilterPrice,priceList} = this.props;
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
								priceList.map((price,i) => {
									return <li key={i}>
										<input 
											onChange = {onCheckedFilterPrice} 
											type="checkbox" 
											value = {price.range_num}
											/>{`${price["min"]} to ${price["max"]}`}</li>
								})
							}
						</ul>
					</div>
			</div>
		);
	}
}


