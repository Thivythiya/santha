import React from 'react';
let sortBy = ['new', 'low to high', 'high to low'];
class ProductFilter extends React.Component{
	constructor(){
		super()
	}
	
	render(){
	

		return (<div className="productFilter">Sort by
			<span>
				<select onChange={this.props.optionChange}>
				{
					sortBy.map((sort,i) => {
					 return	<option key={i} value = {sort}>{sort}</option>
					})
				}
				</select>
				
			</span>
		</div>);
	}
}
export default ProductFilter;

