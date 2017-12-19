import React, {Component} from 'react';
const sortBy = ['new', 'low to high', 'high to low'];
class ProductFilter extends Component{
	constructor(){
		super()
	}
	render(){
		return <div className="productFilter">
			<select>
			{
				sortBy.map(sort => {
					<option value={sort}>{sort}</option>
				})
			}
			</select>
		</div>
	}
}
export default ProductFilter;