import React from 'react';
import ProductsList from './ProductsList';
import ProductHeader from './ProductHeader';
import ProductFilter from './ProductFilter';
class ProductsPage extends React.Component{
	constructor(){
		super()
	}


	componentWillReceiveProps(){
  		console.log("on revicve props - PRODTSPAGE CMP");
  	}

	shouldComponentUpdate(){
		console.log("Should CMUP - PRODTSPAGE CMP");
		return false;
	}

	componentWillUpdate(){
		console.log("CMWUP - PRODTSPAGE CMP");
	}

	componentDidUpdate(){
		console.log("CMDUP - PRODTSPAGE CMP");
	}

	render(){
		
		console.log("productsList - I am in product component", this.props.productsList);

		return(
			<div className="product-details">
				<div className="productHeader-details">
					<ProductHeader />
					<ProductFilter />
				</div>
				<ProductsList products = {this.props.productsList} buttonClick = {this.props.handleClick}/>
			</div>	
		)		
	}
}


export default ProductsPage;