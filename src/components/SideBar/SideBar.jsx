import React, {Component} from 'react';
import './SideBarStyle';



export default class SideBar extends Component{
	
	constructor(){
		super()
	}

	render(){
		let {onCheckedFilter,onCheckedFilterPrice,priceList,category} = this.props;
		return (<div className="sidebar-div">
					<div>
						<h4>Categories</h4>
						<ul> 
							{
								category.map((brand,i) => {
									return <li key={i}>
									<label className="check-container">
										<input 
											onChange={onCheckedFilter}
											type="checkbox"
											value={brand} 
										/>
										<span className="checking"></span>
										<span>{brand}</span>
									</label>	
										</li>
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
									<label className="check-container">
										<input 
											onChange = {onCheckedFilterPrice} 
											type="checkbox" 
											value = {price.range_num}
											/>
											<span className="checking"></span>
											<span>{`${price["min"]} to ${price["max"]}`}</span>
										</label>	
										</li>
								})
							}
						</ul>
					</div>
			</div>
		);
	}
}


