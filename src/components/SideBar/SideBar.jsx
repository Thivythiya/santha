import React, {Component} from 'react';
import './SideBarStyle';

let brands = ['TPMS','Bluetooth TPMS', 'Wifi TPMS', 'Sensairy'];
let prices = ['100 to 1000', '1000 to 5000', '5000 to 10000', '10000 to 20000', '20000 above'];
export default class SideBar extends Component{
	
	constructor(){
		super()
	}

	render(){

		return (<div className="sidebar-div">
					<div>
						<h4>Brand</h4>
						<ul>
							{
								brands.map((brand,i) => {
									return <li key={i}><input type="checkbox" />{brand}</li>
								})
							}	
						</ul>
					</div>
					<div>
						<h4>Price</h4>
						<ul>
							{
								prices.map((price,i) => {
									return <li key={i}><input type="checkbox" />{price}</li>
								})
							}
						</ul>
					</div>
			</div>
		);
	}
}


