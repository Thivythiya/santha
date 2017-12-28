import React from 'react';
import './productStyle';
class ProductsList extends React.Component {
	constructor(){
		super();		

		this.addToCartItems = this.addToCartItems.bind(this);
	}

	addToCartItems(id){
		this.props.buttonClick(id)
	}

	render(){
		
		let {products} = this.props;

		//console.log("products", this.props.products);
		
				return(
					<div id="products-list">
					{
						products.map( product => {
						return <div key={product.id}className="product-item">
									<div className="product-image">
										<img src={product.image} />
									</div>
									<div className="product-text">
										<ul>
											<li>{product.name}</li>
											<li>{`${product.price} INR `}</li>
											<button onClick = {this.addToCartItems.bind(this,product)}>Add to cart</button>
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