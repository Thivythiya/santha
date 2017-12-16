import React from 'react';
import './productStyle';
class ProductsList extends React.Component {
	constructor(){
		super();
		this.state = {
			count: 0
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
	render(){
		
		let {products} = this.props;

		//console.log("products", this.props.products);

		
				return(
					<div id="products-list">
					count:{this.state.count}
					{
						 products.map( product => {
						return <div key={product.id}className="product-item">
									<ul><img src={product.image} />
										<li>{product.name}</li>
										<li>{product.price}</li>
										<button onClick = {this.handleClick}>Add to cart</button>
									</ul>	
								</div>
					})
		}

			</div>
)
	}
}

export default ProductsList; 