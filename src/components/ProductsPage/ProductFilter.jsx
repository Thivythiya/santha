import React from 'react';
import appData from '../../appData';
class ProductFilter extends React.Component{
	constructor(){
		super()
	}
	render(){
	

		return (<div className="productFilter">Sort by
			<span>
				<select onChange={this.props.optionChange}>
				{
					appData.sortBy.map((sort,i) => {
					 return	<option key={i} value = {sort.id}>{sort.value}</option>
					})
				}
				</select>
				
			</span>
		</div>);
	}
}
export default ProductFilter;

