import React from 'react';

import './productStyle';

class ProductsList extends React.Component {
	constructor(){
		super();		
	}
	render(){
		
		let {products,buttonClick} = this.props;

		//console.log("products", this.props.products);

		
				return(
					<div id="products-list">
					{
						 products.map( product => {
						return <div key={product.id}className="product-item">
									<div>
										<img className = "productImage" src={product.image} />
									</div>
									<div className="product-text">
										<ul>
											<li>{product.name}</li>
											<li>{product.price}</li>
											<button onClick = {buttonClick}>Add to cart</button>
										</ul>
									</div>	
								</div>
					})
		}

			</div>
)
	}
}

export default ProductsList; 