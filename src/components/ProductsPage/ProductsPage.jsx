import React from 'react';
import ProductsList from './ProductsList';
import ProductHeader from './ProductHeader';
import ProductFilter from './ProductFilter';


class ProductsPage extends React.Component{
	constructor(){
		super()
	}
	render(){
		
		console.log("productsList - I am in product component", this.props.productsList);

		return(
			<div className="product-details">
				<div className="productHeader-details">
					<ProductHeader />
					<ProductFilter products = {this.props.productsList} optionChange ={this.props.change}/>
				</div>
				<ProductsList products = {this.props.productsList} buttonClick = {this.props.handleClick} />
			</div>	
		)		
	}
}


export default ProductsPage;